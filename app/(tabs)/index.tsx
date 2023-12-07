import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { StyleSheet, Image, ImageBackground, Pressable, Button } from 'react-native';
import { Text, View} from '../../components/Themed';
import { useState } from 'react';
import RenderImage from '../../components/RenderImage';
import Scanner from '../../components/scanner';
import { BarCodeScanner } from 'expo-barcode-scanner';

interface Props{
  scannedItems: {scanOne: string, scanTwo: string, scanThree: string}
}

export default function TabOneScreen(props: Props) {
  const [scanned, setScanned] = useState(false);
  const[showScanner, setShowScanner] = useState(false);
  const[scannedData, setScannedData] = useState({scanOne:'', scanTwo:'', scanThree:''})
  const [newCodes, setNewCodes] = useState<string[]> ([]);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(()=> {
  const grantedCameraPermission = () => {
    (async () => {
    const {status} = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status == 'granted')
  })()
  }

  const deniedCameraPermission = () => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'denied')
      
    })()

    if(hasPermission === null) {
      return(
        <View style={styles.container}>
        <Text>Do you allow us to use the camera?</Text>
        <Button title='Yes' onPress={grantedCameraPermission} />
        <Button title='No' onPress={deniedCameraPermission} />
      </View>
      )
    }
    if(hasPermission === false) {
      return(
        <View style={styles.container}>
        <Text style={{margin:10}}>No access to camera</Text>
        <Button title={'Allow camera'} onPress={() => grantedCameraPermission()}/>
      </View>
      )
    }
  }
})
  const handleBarcodeScanned = ( data: string) => {
    
    console.log('Inside handleBarcodeScanned');
    
    if(newCodes.length <= 2){
      newCodes.push(data);
      //setNewCodes((prevCodes) => [...prevCodes, data]);
      console.log('newCodes: ', newCodes.length);
      
      <Scanner onBarCodeScanned={handleBarcodeScanned}/>
    }

    if(newCodes.length === 3) {
      console.log('Three codes scanned: ', newCodes.forEach);
      
      newCodes.push(data);
      setNewCodes((prevCodes) => [...prevCodes, data]);
      const [scanOne, scanTwo, scanThree] = newCodes;
      setScannedData({scanOne, scanTwo, scanThree});
      console.log('scanOne, scanTwo, scanThree: ',scanOne, scanTwo, scanThree);
      setShowScanner(true)
    }
  }
    
  // Start scanning button? skickas till scanner eller how to slides?
  const nextPress = () => {
    console.log('Pressed');
    
     
   
  }
    return(
      <View style={styles.container}>
      {showScanner ? (
        <RenderImage scannedItems={scannedData} setShowScanner={setShowScanner}/>
      ) : (
        <>
        <Scanner onBarCodeScanned={handleBarcodeScanned} />
        
        {/* <Pressable onPress={nextPress}>
          <Image
            style={{ 
              width: 390,
              height: 700,
            }}
            source={
              require('../../assets/images/paintScale.jpg')
            }
          />
        </Pressable> */}
        </>
      
      )}
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
