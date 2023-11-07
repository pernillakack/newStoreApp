import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../../components/Themed';
import Scanner from '../../components/scanner';
import React, { Children, useContext, useState } from 'react';

import RenderImage from '../../components/RenderImage';



interface Props{
  scannedItems: {scanOne: string, scanTwo: string, scanThree: string}
  
}

export default function TabTwoScreen(props: Props) {
  const[showRenderImage, setShowRenderImage] = useState(false);
  const[scannedData, setScannedData] = useState({scanOne:'', scanTwo:'', scanThree:''})

  function handleScannedItems(scanOne: string, scanTwo: string, scanThree: string) {

    if(scanThree){
      console.log('Tillbaka i tabTwo och if(scanThree)')
      setShowRenderImage(true);
      setScannedData({scanOne, scanTwo, scanThree})
    }
    
    console.log('ScannedItems from TabTwoScreen, 1: '+ scanOne + ' 2: '+ scanTwo + ' 3: ' + scanThree);
  }
  
  return (
    <View style={styles.container}>
      {showRenderImage ? (
        <RenderImage scannedItems={scannedData} />
      ) : (
        <>
      <Text style={styles.title}>Scanner</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Scanner scannedItems={(scanOne, scanTwo, scanThree) => handleScannedItems(scanOne, scanTwo, scanThree)} />
        </>
      )}
    </View>
  );
  
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
    width: 300,
    height: 400,
  }
});
