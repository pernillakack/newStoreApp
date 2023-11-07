import React, { useContext, useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";


interface Props {
  scannedItems: {scanOne: string, scanTwo: string, scanThree: string};
}

function RenderImage(props: Props) {
  const { scanOne, scanTwo, scanThree } = props.scannedItems;
  
  const { scannedItems } = props;

  console.log('From RenderImage. scanOne: ' + scanOne + ' scanTwo: '+ scanTwo + ' scanThree: '+ scanThree);
 
  function getScannedCodes() {
    
  }
  
    switch(getScannedCodes.length){
      case 0:
        return (
          <View style={styles.container}>
            <Image
              source={{uri:'https://pixijs.com/assets/bunny.png'}}
              style={styles.image}
            />
          </View>
        );
        break;
      case 1:
        return (
          <View style={styles.container}>
            <Image
              source={{ uri:'https://pixijs.com/assets/flowerTop.png'}}
              style={styles.image}
            />
          </View>
        );
            break;
            case 2:
              return(
              <View style={styles.container}>
                <Image
                  source={{ uri:'https://pixijs.com/assets/maggot_tiny.png'}}
                  style={styles.image}
                />
              </View>
            );
            break;
            case 3:
              return(
              <View style={styles.container}>
                <Image
                  source={{ uri:'https://pixijs.com/assets/eggHead.png'}}
                  style={styles.image}
                />
              </View>
            );
            break;
              case 4:
                return(
              <View style={styles.container}>
                <Image
                  source={{ uri:'https://pixijs.com/assets/helmlok.png'}}
                  style={styles.image}
                />
              </View>
            );
            break;
            case 5:
              return(
              <View style={styles.container}>
                <Image
                  source={{ uri:'https://pixijs.com/assets/skully.png'}}
                  style={styles.image}
                />
              </View>
            );
            break; 
              case 6:
                return(
              <View style={styles.container}>
                <Image
                  source={{ uri:'https://cdn.pixabay.com/photo/2017/11/06/18/30/eggplant-2924511_640.png'}}
                  style={styles.image}
                />
              </View>
            );
            break;
              case 7:
                return(
              <View style={styles.container}>
                <Image
                  source={{ uri:'https://cdn.pixabay.com/photo/2017/11/06/18/30/eggplant-2924511_640.png'}}
                  style={styles.image}
                />
              </View>
            );
            break;
        }
       
        
    return (
      
      <View style={styles.container}>
      
        <Image
          source={{uri:'https://pixijs.com/assets/eggHead.png'}}
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