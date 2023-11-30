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
    

  function nextPress(scannedData: any){{
    return(
      console.log("Pressed")
      
    )
    
  }}

    return(
      <View style={styles.container}>
        
          {/* <Image source={require('../../assets/images/paintScale.jpg')}/> */}
        <Pressable onPress={nextPress}>
          <Image
            style={{ 
              width: 390,
              height: 700,
            }}
            source={
              require('../../assets/images/paintScale.jpg')
            }
          />
        </Pressable>
        

      </View>   
    )
  }
  

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: 150,
    height: 150,
  }});