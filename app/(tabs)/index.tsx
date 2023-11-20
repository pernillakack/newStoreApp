import { StyleSheet, Image } from 'react-native';
import * as FileSystem from 'expo-file-system'

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View} from '../../components/Themed';
import RenderImage from '../../components/RenderImage';


export default function TabOneScreen() {

  
  const localUri = 'file:///data/user/0/host.exp.exponent/files/image.png';
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FunAtStore</Text>
      <Image source={{ uri: localUri}} 
              style={styles.image}/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: 150,
    height: 150,
  }
});
