import React from 'react';
import { StyleSheet, Image, ImageBackground, Pressable } from 'react-native';
import { Text, View} from '../../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
import ScannerTwo from '../../components/ScannerTwo';


export default function TabOneScreen({ScannerProps}:any) {
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState('');
  const [showScannerTwo, setshowScannerTwo] = useState(false)

  const handleBarCodeScanned = (data: string) => {
    console.log('Scanned data: ', data);
    setScanned(true);
    setScannedData(data);
    
  }
    
  // Start scanning button? skickas till scanner eller how to slides?
  function nextPress(scannedData: any){{
    return(
      console.log("Pressed")
      
    )
    
  }}

    return(
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/splashScreenFunstorePNG.png')}  style={styles.backgroundImage}>
        
          {/* <Image source={require('../../assets/images/paintScale.jpg')}/> */}
        {/* <Pressable onPress={nextPress}>
          <Image
            style={styles.backgroundImage}
            source={
              require('../../assets/images/splashScreenFunstorePNG.png')
            }
          />
        </Pressable> */}
        
        </ImageBackground>
      </View>   
    )
  }
  

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    height:'100%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  backgroundImage:{
    flex:1,
    height:'100%',
    width:'100%',
    maxHeight:1366,
    maxWidth:1024,
  }

});