import  Video  from "react-native-video"
import React from "react"
import { StyleSheet, Text, View, Button } from 'react-native';


const Loadingvideo = () =>{
    return (
        <View>
        <Video  
            source={require('../assets/images/loadingvideo2.mp4')}
            paused={false}                  
            repeat={true}  
            style={styles.container}      
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

      position:'absolute'
    
    },

  });
export default Loadingvideo