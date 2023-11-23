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
    const [showScannerTwo, setshowScannerTwo] = useState(true)

    useEffect(() => {}, [])


    const addToDatabase = async () => {
        console.log('ADDED');

        const doc = addDoc(collection(FIRESTORE_DB, 'scans'), {name: scannedItemName, barcode: + scannedCode})
        console.log('Name:' + scannedItemName ,'\nBarcode:' + scannedCode);   
    }

    function sendToScanner (){
        
    }

    const handleBarCodeScanned = (data: string) => {
        console.log('Scanned data: ' + data);
        setscannedCode(data)
        setshowScannerTwo(false)
      }

    
    

  return (
    <View>    
    <View style={styles.scanContainer}>
      {showScannerTwo ? (
      <ScannerTwo  onBarCodeScanned={handleBarCodeScanned}/>

      ) : (
        <View style ={styles.container}>

        <View style={styles.scanBox}>
            <Text style={styles.scanText}>Scanned code: {scannedCode}</Text>
        </View>

        <TextInput style={styles.input} placeholder='Add item name' onChangeText={(text: any) => setScannedItemName(text)} value={scannedItemName}/>
        <Pressable style={scannedItemName? (styles.button): styles.button2} onPress={addToDatabase}>
            <Text style={styles.inputText}>Add to firebase</Text>
        </Pressable>

        <Pressable style={styles.back} onPress={()=>setshowScannerTwo(true)}>
            <Text style={styles.inputText}>back to scanner</Text>
        </Pressable>

      </View>
      )}

      {/* <Pressable style={styles.scanButton} onPress={() => sendToScanner()}>
          <Text style={styles.inputText}>Scanner</Text>
      </Pressable> */}
    </View>

  </View>
  )
}

const styles = StyleSheet.create({
    back:{
        backgroundColor: 'yellow',
        borderRadius: 25,
    },
    scanText:{
        fontSize:18,
    },
    scanBox: {
        backgroundColor:'green',
        height: 50,
        width: 260,
        margin: 20,
        borderRadius: 25,
        alignItems: 'center'

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
        color: 'black',
        textAlign:'center',
        margin: 20,
        fontWeight:'bold',
        letterSpacing:0.4,
    }

})

export default Connection