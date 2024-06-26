import { View, StyleSheet, Button, Image } from "react-native";
import React, { useState, useEffect } from "react";
import {saveImage} from "./SaveImage";
import { fetchByBarcode } from "./FetchByBarcode";


interface Props {
  scannedItems: {scanOne: string; scanTwo: string; scanThree: string};
  setShowScanner: (open: boolean) => void;

}

function RenderImage(props: Props) {
  const { scanOne, scanTwo, scanThree } = props.scannedItems;
  const {setShowScanner} = props;
  

    const [image_url, setImage_url] = useState('/');
    //const imageSource = { uri: image_url };

    const [barcodeData, setBarcodeData] = useState<{ name?: string}[]>([]);
    //const [imageRequest, setImageRequest] = useState('');
    const [promptString, setPromptString] = useState('');
    const [switchExecuted, setSwitchExecuted] = useState(false);

    const apiUrl = process.env.EXPO_PUBLIC_OPENAI_KEY;

              useEffect(() => {
  
                const fetchData = async () => {
                const results = [];
                if (scanOne) {
                  const result = await fetchByBarcode(scanOne);
                  console.log('Fetched scanOne: ', scanOne , ' Result: ', result);
                  results.push(result);
                  if(Array.isArray(result)){
                    results.push({ id: 'uniqueId', name: 'mustard'});
                  }
                }
                if (scanTwo) {
                  const result = await fetchByBarcode(scanTwo);
                  console.log('Fetched scanTwo: ', scanTwo , ' Result: ', result);
                  results.push(result);
                  if(Array.isArray(result)){
                    results.push({ id: 'uniqueId', name: 'orange'});
                  }
                }
                if (scanThree) {
                let result = await fetchByBarcode(scanThree);
                  console.log('Fetched scanThree: ', scanThree , ' Result: ', result);
                  results.push(result);
                  if(Array.isArray(result)){
                    results.push({ id: 'uniqueId', name: 'potato'});
                  }
                }
                
                setBarcodeData(results.flat())
                console.log('Results: ',results.flat());
                setSwitchExecuted(true);
              }
                fetchData();
              }, [scanOne, scanTwo, scanThree]);
              const [name1, name2, name3] = barcodeData.map((data) => data.name || 'default');
              
    console.log('Fetched names: ',name1, name2, name3);
    
    //let imageRequest = `Generate a happy toon character mixed of ${name1} and ${name2} with a hat of ${name3}.`;
    //console.log(imageRequest);
    
        if(name1 && name2 && name3 && !switchExecuted) {
     
        const random = 
        Math.floor(Math.random() * 10) +1
        
        console.log( 'randomNumber', random)

        const safeName1 = name1 || 'sausage';
        const safeName2 = name2 || 'milk';
        const safeName3 = name3 || 'apple';
        switch(random){
            case 1:
                setPromptString(`Animate two toon characters made out of ${safeName1} and ${safeName2} dancing with a ${safeName3} `);
                break;
              case 2:
                setPromptString(`Animate two toon characters made out of ${safeName1} and ${safeName2} dancing with a ${safeName3} `);
                  break;
                case 3:
                  setPromptString(`Animate two toon characters made out of ${safeName1} and ${safeName2} playing with a ${safeName3} `);
                    break;
                  case 4:
                    setPromptString(`Animate two toon characters made out of ${safeName1} and ${safeName2} dancing with a ${safeName3} `);
                      break;
                    case 5:
                      setPromptString(`Animate two toon characters made out of ${safeName1} and ${safeName2} dancing with a ${safeName3} `);
                        break;
                      case 6:
                        setPromptString(`Animate toon characters made out of ${safeName1}, ${safeName2} and ${safeName3} playing an having fun in water `);
                          break;
                        case 7:
                          setPromptString(`Animate toon characters painting other toon characters out of ${safeName1}, ${safeName2} and ${safeName3} `);
                            break; 
                          case 8:
                            setPromptString(`Animate a toon character made combined out of ${safeName1}, ${safeName2} and ${safeName3} smiling and sticking out its tounge `);
                              break;                           
                            case 9:
                              setPromptString(`Animate toon characters looking like ${safeName1}, ${safeName2} baking a cake looking like ${safeName3} `);
                                break;
                              case 10:
                                setPromptString(`Animate a toon character mixed of ${safeName1} and ${safeName2} with a hat of ${safeName3} `);
                                  break;
                                default:
                                  setPromptString(`Animate a toon character made combined out of ${safeName1}, ${safeName2} and ${safeName3}smiling and sticking out its tounge `); 
                                  break;
        }
        setSwitchExecuted(true);
        console.log('PrompString: ', promptString);
        
      }
        useEffect(()=> {
          if(promptString){
            imageGenerator();
          }
        }, [promptString])
    
    const imageGenerator = async () =>{
        if(!apiUrl){
            console.error('APIurl is missing')
            return;
        }
        try{
          console.log('Prompstring i imageGenerator: ', promptString);
          
        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method: "Post",
                headers:{
                    "Content-Type": "application/json",
                    Authorization:
                    `Bearer ${apiUrl}`,
                    "User-Agent": "Firefox" 
                },
                body: JSON.stringify({
                    prompt: promptString,
                    n:1,
                    size:"256x256"
                }),
            }
        );

        if(!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        let data = await response.json();
        console.log(data);
        let data_array = data.data;
        setImage_url(data_array[0].url);
        
    } catch (error) {
        console.error('Error during image generation: ', error)
    }
  }

  return(
    <View style={styles.container}>
    <Image
      source={{uri: image_url}}
      style={styles.image}
    />
  <View>
  <Button title={'Spara bild'} onPress={() => saveImage(image_url)} />
  </View>
  
      <View>
        <Button title='Tillbaka till scannern' onPress={()=> setShowScanner(false)} />
      </View>
    </View>
  );
  }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          image: {
            width: 300,
            height: 400,
          }
    })
    export default RenderImage;