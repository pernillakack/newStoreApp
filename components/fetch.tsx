import { Button, StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FIREBASE_APP, FIRESTORE_DB } from '../firebaseConfig'
import { FirebaseApp } from 'firebase/app'
import { Firestore, QuerySnapshot, addDoc, collection } from 'firebase/firestore'
import { Text, View} from './Themed'
import {doc, getDoc} from 'firebase/firestore'

const Fetch = async () => {

    const docRef = doc(FIRESTORE_DB, 'name', 'barcode')
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()){
        console.log('Document data:\n', docSnap.data());
    } else {
        console.log('no such document');
        
    }

    return (
        <View>
        </View>
    )
}

export default Fetch