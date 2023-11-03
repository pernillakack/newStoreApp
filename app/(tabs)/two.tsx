import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Scanner from '../../components/scanner';
import React, { Children, useContext, useState } from 'react';

import RenderImage from '../../components/RenderImage';
import { useNavigation } from '@react-navigation/native';

interface Props{
  scannedItems: (scanOne: string, scanTwo: string, scanThree: string) => void;
  
}

export default function TabTwoScreen(props: { scannedItems: Props ['scannedItems'] }) {
  const navigation = useNavigation();

  function handleScannedItems(scanOne: string, scanTwo: string, scanThree: string) {
    if(scanThree){
      return(
        <View>
         <RenderImage scannedItems={function (scanOne: string, scanTwo: string, scanThree: string): void {
            throw new Error('Function not implemented.');
          } } />
        </View>
      )
    }
    console.log('ScannedItems from TabTwoScreen, 1: '+ scanOne + ' 2: '+ scanTwo + ' 3: ' + scanThree);
  }

  
    
  //const code = useContext(codeContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scanner</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
     
      <Scanner scannedItems={(scanOne, scanTwo, scanThree) => handleScannedItems(scanOne, scanTwo, scanThree)} />
    
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
});
