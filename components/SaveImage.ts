import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { FIREBASE_APP, FIRESTORE_DB } from '../firebaseConfig';
import { Firestore, addDoc, collection, getFirestore } from 'firebase/firestore';
import { ref, uploadBytes } from "firebase/storage";
import { fireStorage } from '../firebaseConfig';

import { PermissionsAndroid } from 'react-native';
import  storage  from '@react-native-firebase/storage';


    const saveImage = async(uri: string) => {
       try{
        const {status} = await MediaLibrary.requestPermissionsAsync();
        console.log('Permission status: ', status);
        

        if(status === 'granted'){
            const localUri = `${FileSystem.cacheDirectory}image.png`;
            //download the image to a local file
            const { uri: downloadedUri} = await FileSystem.downloadAsync(uri, localUri);

            const asset = await MediaLibrary.createAssetAsync(downloadedUri);
            await MediaLibrary.createAlbumAsync('Expo', asset, false);

            console.log('Image successfully saved!');

            //Upload the image to Firestore

            const response = await fetch (downloadedUri);
            const blob = await response.blob();

            const storageRef = storage().ref();
            const imageRef = storageRef.child('images/image.png');

            await imageRef.put(blob);

            //Delete the image from local storage
            await FileSystem.deleteAsync(localUri, { idempotent: true});
            console.log('Image uploaded to Firestore and deleted from local storage!');
            
            
        }
       } catch (error){
        console.error('Save image error: ',error);
       }
    }

export {saveImage};