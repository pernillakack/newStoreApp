import React, { useContext, useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";


interface Props {
  scannedItems: (scanOne: string, scanTwo: string, scanThree: string) => void;
}

function RenderImage(props: { scannedItems: Props ['scannedItems'] }) {

  useEffect(() => {
    // Update the state when props change (e.g., when scannedItems is called)
    
  }, [props.scannedItems]);

    
  {/*
  function getScannedCodes() {
    const scanOne= '';
    const scanTwo = '';
    const scanThree = '';
    props.scannedItems(scanOne, scanTwo, scanThree);
    
    console.log('From RenderImage. scanOne:' + {scanOne}+ 'scanTwo'+{scanTwo}+'scanthree'+{scanThree})
  }
  */}
  let pic;

    {/*
    switch(getScannedCodes.length){
      case 0:
        pic={uri:'https://pixijs.com/assets/bunny.png'};
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
        */}
        
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