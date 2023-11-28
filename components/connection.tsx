import { Button, StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FIREBASE_APP, FIRESTORE_DB } from '../firebaseConfig'
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, query, where } from 'firebase/firestore'
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


    const fetchById = async () => {

        const docRef = doc(FIRESTORE_DB, 'scans','0c4uxkIb9mu9IgcPs9RT')
        const docSnap = await getDoc(docRef)


    
        if(docSnap.exists()){
            console.log('Document data:\n', docSnap.data());
        } else {
            console.log('no such document');
            
        }}

    const fetchByBarcode = async () => {
        const scansRef = collection(FIRESTORE_DB, 'scans')
        const barcodeValue = '7311250004926'; // Replace with the actual barcode value
        // Use the 'where' method to filter documents based on the 'barcode' field
        const q = query(scansRef, where('barcode', '==', barcodeValue));        
        const snapshot = await getDocs(q)
        console.log(snapshot);
        
        getDocs(q)
            .then((snapshot) => {
                let scans: { id: string}[] = []
                snapshot.docs.forEach((doc) =>{
                    scans.push({
                        ...doc.data(), id: doc.id,
                        
                    })
                })
                console.log('Scans: ',scans);
                console.log();
                
                
                const myObj = {'id': 1, 'barcode': 'asdasdad'}
                console.log(myObj.barcode);
                console.log('scans:' ,scans);
                
                const key = [scans]
                for (const key of scans){
                    console.log('key:',key);
                    console.log(key);
                    console.log('keyn.name: ', key.name); 
                }
                
                
                
                // const docRef = doc(FIRESTORE_DB, 'barcode','7311250004926')
                // onSnapshot(docRef,(doc) => {
                //     console.log('doc.data: ',doc.data(),doc.id);
                    
                // })
            })
        
        


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
        <Pressable style={styles.button}onPress={fetchById}>
            <Text style={styles.inputText}>Fetch by ID</Text>
        </Pressable>
        <Pressable style={styles.button}onPress={fetchByBarcode}>
            <Text style={styles.inputText}>Fetch DB by barcode</Text>
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