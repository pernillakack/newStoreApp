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
      <ImageBackground source={require('../assets/images/7201280.png')}  style={styles.backgroundImage}>
      <View style={styles.barcodebox}>
        <BarCodeScanner style={styles.scanner}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned }
        />
      </View>
      <Text style={styles.maintext}>{text}</Text>
      {scanned && <Button title={buttonTitle} onPress={() => setScanned(false)}></Button> }
      
      </ImageBackground>
      
    </View>  
)
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      height:'100%',
      backgroundColor: 'tomato',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImage:{
      height:'100%',
      width:'100%',
    },
    maintext: {
      alignSelf:'center',
      justifyContent:'center',
      textAlign:'center',
      width:'50%',
      fontSize: 16,
      backgroundColor:'green',
    },
    barcodebox: {
      width:'50%',
      height:100,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:25,
      position: 'fixed',
      backgroundColor:'tomato',
      overflow:'hidden'

    },
    scanner:{
      height:100,
      width:260,
      position: 'fixed',
    
    },
    container2: {
      flex:1,
      width:'100%',
      height:'100%',
      justifyContent:'center',
      alignItems:'center'
    },


  });
  
export default Scanner;