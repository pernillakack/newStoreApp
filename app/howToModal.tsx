import React from "react";
import { useState } from "react";
import { StyleSheet, Image, ImageBackground, Pressable , Modal, Button} from 'react-native';

import { SafeAreaView } from "react-native-safe-area-context";

function howToModal (){
    const [visible, setVisible] = useState(false)
    const show = () => setVisible(true)
    const hide = () => setVisible(false)
    return(
        <SafeAreaView style={styles.modalContainer}>
            <Button title='Show' onPress={show}/>
            <Modal
                visible={visible}
            >
            <SafeAreaView style={styles.visibleModalContainer}>
                <Button title="Hide" onPress={hide}/>
            </SafeAreaView>
            </Modal>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#DDD',
        width: '100%',
        height:'50%'
        
    },
    visibleModalContainer:{
        marginTop:100,
        flex:1,
        height:'100%',
        width:'100%',
        alignItems:'center',
        backgroundColor:'grey'
    },

});

export default howToModal