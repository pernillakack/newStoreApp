import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import React from 'react';
import ScannerTwo from '../components/ScannerTwo';
import Connection from '../components/connection';
import HowToModal from './howToModal';

export default function ModalScreen() {



  return (
    <View style={styles.container}>
      <Connection/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%'
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
