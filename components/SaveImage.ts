import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';


    const saveImage = async(uri: string) => {
        try{
            
            console.log('Image URI: ', uri);
            
            const {status} = await MediaLibrary.requestPermissionsAsync();
            console.log('Permission Status: ', status);

            if(status === 'granted') {
                const localUri = `${FileSystem.documentDirectory}image.png`;
                //Download the image to the apps internal sorage
                const downloadResult = await FileSystem.downloadAsync(uri, localUri);
                
                if(downloadResult.status ===200){
                   console.log('Image saved locally');
                   {/* 
                   const response = await fetch(localUri);
                   const blob = await response.blob();

                   const storageRef = storage.ref();
                   const imageRef = storageRef.child('images/image.png adjust this to firestore');

                   await imageRef.put(blob);
                   console.log('Image uploaded to firebase storage');
                   */}
                   
            } else {
                console.error('Error downloading image: ', downloadResult);
            }
        }
        } catch (error) {
            console.log(error);
            
        }
    }

export {saveImage};