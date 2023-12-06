import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Pressable, ImageBackground } from 'react-native';
import { BarCodeScanner} from 'expo-barcode-scanner';
import FontAwesome5 from '@expo/vector-icons/build/FontAwesome5';

interface Props{
  scannedItems: (scanOne: string, scanTwo: string, scanThree: string) => void;
}

function Scanner(props:Props ){
 
const [hasPermission, setHasPermission] = useState<boolean | null>(null);
const [scanned, setScanned] = useState(false);
const [text, setText] = useState('Skanna första koden');
const [newCodes, setNewCodes] = useState<string[]> ([]);

let buttonTitle;
let icon;

switch(newCodes.length){
  case 0:
    buttonTitle ='Skanna din första kod';
    break;
    case 1:
      buttonTitle='Skanna andra koden';
      // icon="laugh-beam";
      break;
      case 2:
        buttonTitle='Skanna sista koden';
        // icon='grin-stars';
        break;
        case 3:
          buttonTitle='Bra jobbat! Nu fixar vi bilden :)';
          // icon='image';
          break;
          default:
            buttonTitle= 'Vad händer?! :)'
            // icon='poo';
}

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
  }
 
  const handleBarCodeScanned = ({type, data}: { type: string, data: string }) => {
    setText(data);
    newCodes.push(data);
    setNewCodes((prevCodes) => [...prevCodes, data]);
    
    const [scanOne, scanTwo, scanThree] = newCodes;
    props.scannedItems(scanOne, scanTwo, scanThree);
   
    setScanned(true);
    setNewCodes(newCodes);
    console.log('Type: ' + type + '\nData: ' + data + '\nscanOne: ' + scanOne+ '\nscanTwo: '+scanTwo+ '\nscanThree: ' + scanThree);
    
  }
  //check permissions and return the screens
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
 

return(
    <View style={styles.container2}>
      <ImageBackground source={require('../assets/images/3.png')}  style={styles.backgroundImage}>
      <View style={styles.barcodebox}>
        <BarCodeScanner style={styles.scanner}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned }
        />
      </View>
      <Text style={styles.maintext}>{text}</Text>
      {scanned && <Button title={buttonTitle} onPress={() => setScanned(false)} color='tomato'></Button> }
      
      </ImageBackground>
      
    </View>  
)
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      height:'100%',
      backgroundColor: '#fffff',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      zIndex: 1,
    },
    maintext: {
      flex:1,
      width:210,
      fontSize: 16,
      margin: 20,
      backgroundColor:'green',
      position: 'absolute',
    },
    barcodebox: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    scanner:{
      height:200,
      width:300,
      borderRadius:25,
    },

    container2: {
    flex: 1,
    width:'100%',
    height:'100%',

    },
    image: {
    width: 200, // Anpassa storleken efter ditt behov
    height: 200,
    },
    backgroundImage:{
      height:'100%',
      witdth:'100%',
    },
  });
  
export default Scanner;