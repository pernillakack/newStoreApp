import React from "react";
import { View, Image, StyleSheet } from "react-native";

function RenderImage() {

    
    return (
      <View style={styles.container}>
        <Image
          source={{ uri:'https://pixijs.com/assets/bunny.png'}}
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
            width: 150,
            height: 175,
          }
    })
    export default RenderImage;