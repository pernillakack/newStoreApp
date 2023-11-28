import React, { FunctionComponent, useEffect } from "react";
import { View } from "./Themed";
import { Animated, Dimensions, StyleSheet, Text } from 'react-native';

const { width }= Dimensions.get('screen');

const LoadingBar: FunctionComponent = () => {
    const barWidth = React.useRef(new Animated.Value(0)).current;

    const finalWidth = width / 2;

    useEffect(()=>{
        Animated.timing(barWidth, {
            toValue: finalWidth,
            duration: 10000,
            useNativeDriver: false,
        }).start();
    }, []);

  return(
    <View style={styles.barContainer} >
      <Animated.View style={[styles.progressBar, {width: barWidth}]}>
        </Animated.View>
        <Text>Vänta... AI målar din bild...</Text>  
    </View>
  );    
};

const styles = StyleSheet.create({
    barContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    progressBar: {
        backgroundColor: 'purple',
        width: 0,
        height: 30,
        borderRadius: 15,
    }
})
export default LoadingBar;