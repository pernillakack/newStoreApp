import { Button, StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FIRESTORE_DB } from '../firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'
import { Text, View} from './Themed'
import ScannerTwo from './ScannerTwo';


const Connection = ({ScannerProps}:any) => {
    const [scannedItems, setScannedItems] = useState<any[]>([])
    const [scannedItemName, setScannedItemName] = useState('')
    const [scannedCode, setscannedCode] = useState('')
    // const onBarCodeScanned = ScannerProps

    useEffect(() => {}, [])


    const addToDatabase = async () => {
        console.log('ADDED');

        const barcode = '000'
        const doc = addDoc(collection(FIRESTORE_DB, 'scans'), {name: scannedItemName, barcode: + barcode})
        console.log('Name:' + scannedItemName ,'\nBarcode:' + barcode);   
    }

    function sendToScanner (){
        
    }
    

  return (
    <View style={styles.main}>    
    
    <View style={styles.scanContainer}>
      <Pressable style={styles.scanButton} onPress={() => sendToScanner()}>
          <Text style={styles.inputText}>Scanner</Text>
      </Pressable>
    </View>
    
    
    <View style ={styles.container}>
      <TextInput style={styles.input} placeholder='Add item name' onChangeText={(text: any) => setScannedItemName(text)} value={scannedItemName}/>
      <Pressable style={scannedItemName? (styles.button): styles.button2} onPress={addToDatabase}>
          <Text style={styles.inputText}>Add to firebase</Text>
      </Pressable>
    </View>
    
  </View>
  )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'yellow',

    },
    button2:{
        margin:40,
        height:60,
        width: 180,
        borderRadius: 25,
        borderColor: 'black', 
        alignContent: 'center',
        backgroundColor: 'red',
        elevation: 4, 
    },
    scanButton: {
        margin:40,
        height:60,
        width: 180,
        borderRadius: 25,
        borderColor: 'black', 
        alignContent: 'center',
        backgroundColor: 'tomato',
        elevation: 4, 
    },
    
    scanContainer:{
        flex: 1,
        alignItems:'center',
        borderRadius: 25,
    },
    container:{
        marginTop:150,
        margin: 30,
        alignItems: 'center',
        justifyContent:'center',
    },

    
    button:{
        margin:40,
        height:60,
        width: 180,
        borderRadius: 25,
        borderColor: 'black', 
        alignContent: 'center',
        backgroundColor: 'blue',
        elevation: 4, 
        
    },

    input: {
        backgroundColor:'white',
        width: 260,
        height: 50,
        textAlign:'center', 
        fontWeight: 'bold',   
        borderRadius: 25,
    },
    inputText:{
        color: 'white',
        textAlign:'center',
        margin: 20,
        fontWeight:'bold',
        letterSpacing:0.4,
    }

})

export default Connection