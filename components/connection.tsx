import { Button, StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FIREBASE_APP, FIRESTORE_DB } from '../firebaseConfig'
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, query, where } from 'firebase/firestore'
import { Text, View} from './Themed'
import ScannerTwo from './ScannerTwo';
import { fetchByBarcode } from './FetchByBarcode'

const Connection = ({ScannerProps}:any) => {
    const [scannedItems, setScannedItems] = useState<any[]>([])
    const [scannedItemName, setScannedItemName] = useState('')
    const [scannedCode, setscannedCode] = useState('')
    const [showScannerTwo, setshowScannerTwo] = useState(true)
    const [result, setResult] = useState('')

    useEffect(() => {}, [])


    const addToDatabase = async () => {
        console.log('ADDED');

        const doc = await addDoc(collection(FIRESTORE_DB, 'scans'), {name: scannedItemName, barcode: + scannedCode})
        console.log('Name:' + scannedItemName ,'\nBarcode:' + scannedCode);   
    }


    let scannedCodeNumber:number = +scannedCode



    const fetchById = async () => {

        const docRef = doc(FIRESTORE_DB, 'scans','0c4uxkIb9mu9IgcPs9RT')
        const docSnap = await getDoc(docRef)


    
        if(docSnap.exists()){
            console.log('Document data:\n', docSnap.data());
        } else {
            console.log('no such document');
            
        }}
        const handleBarCodeScanned = async (data: string) => {
            const items = await fetchByBarcode(data);
    
            if(items.length > 0){
                const itemName = items[0].name;
            
            console.log('Fetched scan: ', items );
            console.log('Scanned data: ' , items , 'Name: ', itemName);
            setscannedCode(data)
            setshowScannerTwo(false)
            setResult(itemName || '')
          } else {
            setResult('Saknas')
            setscannedCode(data)
            setshowScannerTwo(false)
          }
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
            <Text style={styles.scanText}>Existing name: {result}</Text>
        </View>

        <TextInput style={styles.input} placeholder='Add item name' onChangeText={(text: any) => setScannedItemName(text)} value={scannedItemName}/>
        <Pressable style={scannedItemName? (styles.button): styles.button2} onPress={addToDatabase}>
            <Text style={styles.inputText}>Add to firebase</Text>
        </Pressable>       
        <Pressable style={styles.button}onPress={fetchById}>
            <Text style={styles.inputText}>Fetch by ID</Text>
        </Pressable>
        <Pressable style={styles.back} onPress={()=>setshowScannerTwo(true)}>
            <Text style={styles.inputText}>back to scanner</Text>
        </Pressable>

  

      </View>
      )}
      
    </View>

  </View>
  )
}

const styles = StyleSheet.create({
    back:{
        backgroundColor: 'yellow',
        borderRadius: 25,
        width:180,
        margin: 40
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
        height:60,
        width: 180,
        borderRadius: 25,
        borderColor: 'black', 
        alignContent: 'center',
        backgroundColor: 'red',
        elevation: 4, 
    },
    scanButton: {
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
        marginTop:80,
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
        margin:10
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