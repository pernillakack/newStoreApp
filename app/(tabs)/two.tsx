import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import Scanner from '../../components/scanner';
import React, { Dispatch, SetStateAction, useState } from 'react';

import RenderImage from '../../components/RenderImage';



interface Props{
  scannedItems: {scanOne: string, scanTwo: string, scanThree: string}
  setShowRenderImage: Dispatch<SetStateAction<boolean>>;
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
        <RenderImage scannedItems={scannedData} setShowRenderImage={setShowRenderImage} />
      ) : (
        <>
      <Scanner scannedItems={(scanOne, scanTwo, scanThree) => handleScannedItems(scanOne, scanTwo, scanThree)} />
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  image: {
    width: 300,
    height: 300,
  }
});
