import { FIRESTORE_DB } from '../firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'

export const fetchByBarcode = async (barcode: string) => {
    const scansRef = collection(FIRESTORE_DB, 'scans')

    let scannedCodeNumber:number = +barcode 
    
    // Use where' method to filter documents based on barcode
    const q = query(scansRef, where('barcode', '==', scannedCodeNumber));        
    const snapshot = await getDocs(q)
    
            let scans: { id: string; name?: string}[] = []
            snapshot.docs.forEach((doc) =>{
                scans.push({
                    ...doc.data(), 
                    id: doc.id,
                })
            })
            console.log('Scans: ',scans);
            
            const key = [scans]
            for (const key of scans){
                // console.log('key:',key);
                // console.log(key);
                console.log('key.name: ', key.name); 
            }
        
        return scans;
}
