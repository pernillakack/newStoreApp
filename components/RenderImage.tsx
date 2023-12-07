import { View, StyleSheet, Button, Image, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import {saveImage} from "./SaveImage";
import { fetchByBarcode } from "./FetchByBarcode";
import { BarCodeScanner } from "expo-barcode-scanner";


interface Props {
  scannedItems: {scanOne: string; scanTwo: string; scanThree: string};
  setShowRenderImage: (open: boolean) => void;
}

function RenderImage(props: Props) {
  const { scanOne, scanTwo, scanThree } = props.scannedItems;
  const {setShowRenderImage} = props;

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
                    results.push({ id: 'uniqueId', name: 'tomato'});
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
        const safeName2 = name2 || 'tomato';
        const safeName3 = name3 || 'apple';
        switch(random){
            case 1:
                setPromptString(`Generate two toon characters made out of ${safeName1} and ${safeName2} dancing with a ${safeName3}`);
                break;
              case 2:
                setPromptString(`Generate two toon characters made out of ${safeName1} and ${safeName2} dancing with a ${safeName3}`);
                  break;
                case 3:
                  setPromptString(`Generate two toon characters made out of ${safeName1} and ${safeName2} playing with a ${safeName3}`);
                    break;
                  case 4:
                    setPromptString(`Generate two toon characters made out of ${safeName1} and ${safeName2} dancing with a ${safeName3}`);
                      break;
                    case 5:
                      setPromptString(`Generate two toon characters made out of ${safeName1} and ${safeName2} dancing with a ${safeName3}`);
                        break;
                      case 6:
                        setPromptString(`Generate toon characters made out of ${safeName1}, ${safeName2} and ${safeName3} playing an having fun in water`);
                          break;
                        case 7:
                          setPromptString(`Generate toon characters painting other toon characters out of ${safeName1}, ${safeName2} and ${safeName3}`);
                            break; 
                          case 8:
                            setPromptString(`Generate a toon character made combined out of ${safeName1}, ${safeName2} and ${safeName3} smiling and sticking out its tounge`);
                              break;                           
                            case 9:
                              setPromptString(`Generate toon characters looking like ${safeName1}, ${safeName2} baking a cake looking like ${safeName3}`);
                                break;
                              case 10:
                                setPromptString(`Generate a toon character mixed of ${safeName1} and ${safeName2} with a hat of ${safeName3}`);
                                  break;
                                default:
                                  setPromptString(`Generate a toon character made combined out of ${safeName1}, ${safeName2} and ${safeName3}smiling and sticking out its toungea`); 
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
            <ImageBackground source={require('../assets/images/2.png')}  style={styles.backgroundImage}>
  
            <Image
      source={{uri: image_url}}
      style={styles.image}
    />
  <View>
  <Button title={'Spara bild'} onPress={() => saveImage(image_url)} />
  </View>
  
      <View>  
        <Button title='Tillbaka till scannern' onPress={()=> setShowRenderImage(false)} />
      </View>
      </ImageBackground>

    </View>
  );
  }
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
          },
          image: {
            marginTop:100,
            width: 500,
            height: 500,
            maxHeight:'50%',
            maxWidth:'100%',
            border:'solid',
            borderRadius:50,
          },
          backgroundImage:{
            height:'100%',
            width:'100%',
          },
    })
    export default RenderImage;