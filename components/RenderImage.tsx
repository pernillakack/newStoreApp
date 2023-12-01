import { View, StyleSheet, Button, Image } from "react-native";
import React, { useState, useEffect } from "react";
import {saveImage} from "./SaveImage";
import { fetchByBarcode } from "./FetchByBarcode";


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
    const [imageRequest, setImageRequest] = useState('');
    const [promptString, setPromptString] = useState('');

    const apiUrl = process.env.EXPO_PUBLIC_OPENAI_KEY;
    console.log('I RenderImage: '+ scanOne +', '+ scanTwo +' and ' + scanThree);

    
              useEffect(() => {
                
                const fetchData = async () => {
                const results = [];
                if (scanOne) {
                  const result = await fetchByBarcode(scanOne);
                  console.log('Fetched scanOne: ', scanOne , ' Result: ', result);
                  results.push(result);
                }
                if (scanTwo) {
                  const result = await fetchByBarcode(scanTwo);
                  console.log('Fetched scanTwo: ', scanTwo , ' Result: ', result);
                  results.push(result);
                }
                if (scanThree) {
                const result = await fetchByBarcode(scanThree);
                  console.log('Fetched scanThree: ', scanThree , ' Result: ', result);
                  results.push(result);
                }
                setBarcodeData(results.flat())
              }
                fetchData()
              }, [scanOne, scanTwo, scanThree]);
              const [name1, name2, name3] = barcodeData.map((data) => data.name || '');
    
    //let imageRequest = `Generate a happy toon character mixed of ${name1} and ${name2} with a hat of ${name3}.`;
    //console.log(imageRequest);
    
        
      let select = true;  
      while(select){
        const random = 
        Math.floor(Math.random() * 10) +1
        select = false;
        console.log( 'randomNumber', random)
        switch(random){
            case 1:
                setPromptString(`Generate two toon characters made out of ${name1} and ${name2} dancing with a ${name3}`);
                break;
              case 2:
                setPromptString(`Generate two toon characters made out of ${name1} and ${name2} dancing with a ${name3}`);
                  break;
                case 3:
                  setPromptString(`Generate two toon characters made out of ${name1} and ${name2} playing with a ${name3}`);
                    break;
                  case 4:
                    setPromptString(`Generate two toon characters made out of ${name1} and ${name2} dancing with a ${name3}`);
                      break;
                    case 5:
                      setPromptString(`Generate two toon characters made out of ${name1} and ${name2} dancing with a ${name3}`);
                        break;
                      case 6:
                        setPromptString(`Generate toon characters made out of ${name1}, ${name2} and ${name3} playing an having fun in water`);
                          break;
                        case 7:
                          setPromptString(`Generate toon characters painting other toon characters out of ${name1}, ${name2} and ${name3}`);
                            break; 
                          case 8:
                            setPromptString(`Generate a toon character made combined out of ${name1}, ${name2} and ${name3} smiling and sticking out its tounge`);
                              break;                           
                            case 9:
                              setPromptString(`Generate toon characters looking like ${name1}, ${name2} baking a cake looking like ${name3}`);
                                break;
                              case 10:
                                setPromptString(`Generate a toon character mixed of ${name1} and ${name2} with a hat of ${name3}`);
                                  break;
                                default:
                                  setPromptString(`Generate a toon character made combined out of ${name1}, ${name2} and ${name3}smiling and sticking out its tounge`); 
                                  break;
        }
      }

      useEffect(()=> {
        
        imageGenerator();

      },[]);

      
  
    const imageGenerator = async () =>{
        if(!apiUrl){
            console.error('APIurl is missing')
            return;
        }
        try{
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
        <Button title='Tillbaka till scannern' onPress={()=> setShowRenderImage(false)} />
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