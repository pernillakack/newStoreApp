import React, { useContext, useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { codeContext } from "../Context/codeContext";

interface Props {
  scannedItems: (scanOne: string, scanTwo: string, scanThree: string) => void;
}

function RenderImage(props: { scannedItems: Props ['scannedItems'] }) {

  useEffect(() => {
    // Update the state when props change (e.g., when scannedItems is called)
    
  }, [props.scannedItems]);
 

  function getScannedCodes() {
    const scanOne= '';
    const scanTwo = '';
    const scanThree = '';
    props.scannedItems(scanOne, scanTwo, scanThree);
    
    console.log('From RenderImage. scanOne:' + {scanOne}+ 'scanTwo'+{scanTwo}+'scanthree'+{scanThree})
  }
  
  let pic;

   {/*} switch(getScannedCodes.length){
      case 0:
        pic={uri:'https://pixijs.com/assets/bunny.png'};
        break;
      case 1:
        return (
          <View style={styles.container}>
            <Image
              source={{ uri:'https://pixijs.com/assets/bunny.png'}}
              style={styles.image}
            />
          </View>
        );
        
    }*/}
    return (
      <View style={styles.container}>
        <Image
          source={{uri:'https://pixijs.com/assets/bunny.png'}}
          style={styles.image}
        />
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