import React, { useState } from "react";
import { View, Image, StyleSheet, Button } from "react-native";

interface Props {
    scannedItems: {scanOne: string, scanTwo: string, scanThree: string};
    setShowRenderImage: (open: boolean) => void;
  }
  
const ImageGenerator = (props: Props)=>{
    const { scanOne, scanTwo, scanThree } = props.scannedItems;
    const [image_url, setImage_url] = useState('');
    const imageSource = { uri: image_url };

    const apiUrl = process.env.EXPO_PUBLIC_OPENAI_KEY;
    let one = 'banana';
    let two = 'milk';
    let three = 'ketchup';
    let imageRequest = 'Generate a toon character mixed of '+ one + ' and '+ two +' with a hat of ' + three;
    
    const imageGenerator = async () =>{
        if(!apiUrl){
            console.error('APIurl is missing')
            return;
        }
        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method: "Post",
                headers:{
                    "Content-Type": "application/json",
                    Authorization:
                    `Bearer ${apiUrl}`,
                    "User-Agent": "Edge" 
                },
                body: JSON.stringify({
                    prompt: imageRequest,
                    n:1,
                    size:"256x256"
                }),
            }
        );
        let data = await response.json();
        console.log(data);
        let data_array = data.data;
        setImage_url(data_array[0].url);
    }

    return(
        <View style={styles.container}>
          <Image
            source={imageSource}
            style={styles.image}
          />
         
        <View>
        <Button title='Tryck här' onPress={imageGenerator}/>
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
        width: 150,
        height: 150,
      },
      button: {

      }
})
export default ImageGenerator;