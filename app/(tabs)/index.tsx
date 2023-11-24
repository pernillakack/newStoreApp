import { StyleSheet, Image } from 'react-native';
import { Text, View} from '../../components/Themed';
import ScannerTwo from '../../components/ScannerTwo';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';

export default function TabOneScreen() {
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState('');

  const handleBarCodeScanned = (data: string) => {
    console.log('Scanned data: ', data);
    setScanned(true);
    setScannedData(data);
  }
    
    return(
      <View style={styles.container}>
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
  }
});
