import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

interface ScannerProps {
    onBarCodeScanned: (data: string) => void;
}

const Scanner: React.FC<ScannerProps> = ({onBarCodeScanned}) => {

const [scanned, setScanned] = useState(false);
const [text, setText] = useState('Scan barcode: ');

  const handleBarCodeScanned = ({data}: {data: string}) => {
    setText(data);
    setScanned(true);
    onBarCodeScanned(data); //meddelar föräldern att något är scannat
  }

  return(
    
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned }
        style = {{height:400, width: 400}}/>
      </View>
      <Text style={styles.maintext}>{text}</Text>
      {scanned && <Button title='Scan barcode' onPress={() => setScanned(false)} color='tomato'></Button> }
     
    </View>  
)
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    maintext: {
      fontSize: 16,
      margin: 20,
    },
    barcodebox: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 300,
      width: 300,
      overflow: 'hidden',
      borderRadius: 30,
      backgroundColor: 'tomato'
    },
    viewStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    }
  });
  
export default Scanner;