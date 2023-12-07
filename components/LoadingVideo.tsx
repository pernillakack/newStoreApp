import  Video  from "react-native-video"
import React from "react"

function Loadingvideo (){
    return (
        <Video  
            source={require('../assets/images/loadingvideo2.mp4')}
            paused={false}                  
            repeat={true}        
        />
    )
}
export default Loadingvideo