import { StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import React from 'react';
import Connection from '../../components/connection';

export default function TabTwoScreen() {

  return (
    <View style={styles.container}>
     <Connection />
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
