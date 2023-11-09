import React, { useContext, useEffect, useState } from "react";
import { View, Image, StyleSheet, Button } from "react-native";


interface Props {
  scannedItems: {scanOne: string, scanTwo: string, scanThree: string};
  setShowRenderImage: (open: boolean) => void;
}

function RenderImage(props: Props) {
  const { scanOne, scanTwo, scanThree } = props.scannedItems;
  const setShowRenderImage = props.setShowRenderImage;

  if(scanThree){
  //plocka ut de fyra sista tecknen i scanOne:
  let slicedScan = scanOne.slice(-4);
  //gör om strängen till number:
  let str: string = slicedScan;
  let num: number = +str;
  
  console.log('From RenderImage. scanOne: ' + scanOne + ' scanTwo: '+ scanTwo + ' scanThree: '+ scanThree);
    
    
    
    console.log(' converted scanOne: ' + num + ' slicedScan:' + slicedScan);

    
    switch (true) {
      case num >= 0 && num <= 1999:
        return (
          <View style={styles.container}>
            <Image
              source={{ uri:'https://pixijs.com/assets/flowerTop.png'}}
              style={styles.image}
            />
          </View>
        );
            case num >= 2000 && num <= 3999:
              return (
                <View style={styles.container}>
                  <Image
                    source={{ uri:'https://pixijs.com/assets/skully.png'}}
                    style={styles.image}
                  />
                </View>
              );
      case num >= 4000 && num <= 5999:
        return(
          <View style={styles.container}>
            <Image
              source={{ uri:'https://pixijs.com/assets/eggHead.png'}}
              style={styles.image}
            />
          </View>
        );
      case num >= 6000 && num <= 7999:
        return(
          <View style={styles.container}>
            <Image
              source={{ uri:'https://pixijs.com/assets/helmlok.png'}}
              style={styles.image}
            />
          </View>
        );
        case num >= 8000 && num <= 9999:
          return(
            <View style={styles.container}>
              <Image
                source={{uri:'https://pixijs.com/assets/bunny.png'}}
                style={styles.image}
              />
              <View>
                <Button title='Tillbaka till scannern' onPress={()=> setShowRenderImage(false)} />
              </View>
            </View>
          );
      default:
        return null; // Handle numbers outside the valid range
    }
  }
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