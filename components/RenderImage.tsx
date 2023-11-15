import { View, StyleSheet, Button } from "react-native";
import ImageGenerator from "./ImageGenerator";
import connection from "../db";


interface Props {
  scannedItems: {scanOne: string; scanTwo: string; scanThree: string};
  setShowRenderImage: (open: boolean) => void;
}

function RenderImage(props: Props) {
  const { scanOne, scanTwo, scanThree } = props.scannedItems;
  const {setShowRenderImage} = props;

  if(scanThree){
    connection
    //function db (){

      // const mysql = require('mysql');
      
      // const con = mysql.createConnection({
      //   host: "localhost",
      //   user: "root",
      //   password: "root",
      //   database: "funstore",
      //   port: 8081
      // });
      
      // con.connect(function(err: any) {
      //   if (err) throw err;
      //   console.log("Connected!");
      //   console.log(db());
        
      // })}
{/*
*   HÄR KAN VI HA LOGIKEN FÖR ATT SKICKA KODERNA TILL DATABASEN -
*   TA EMOT VARORNA NÄR DE KOMMER TILLBAKA OCH SEDAN SKICKA VIDARE  
*   DESSA SOM PROPS TILL IMAGEGENERATOR
*/}
 
  }
  return(
    <View style={styles.container}>
     <ImageGenerator scannedItems={{
      scanOne: "",
      scanTwo: "",
      scanThree: ""
      }} setShowRenderImage={setShowRenderImage}/>  
      <View>
        <Button title='Tillbaka till scannern' onPress={()=> setShowRenderImage(false)} />
      </View>
    </View>
  );
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          image: {
            width: 300,
            height: 400,
          }
    })
    export default RenderImage;