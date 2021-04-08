import React from "react";

import { View, StyleSheet, Image, Text} from "react-native";


export default function ItemGame ({ itemGame }) {
    return(
      <View style={styles.rowGame}>
        <Image style={styles.imageGame} source={{uri:itemGame.fields.image.stringValue}}/>
        <Text style={styles.titleStyle}>{itemGame.fields.name.stringValue}</Text>
      </View>
    );
}  


const styles = StyleSheet.create({
    rowGame:{
      borderWidth:2,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
      borderRadius: 20,
      backgroundColor: "#CECECE"
    },
    imageGame:{
      height: 100,
      width: 100,
      marginLeft: 20,
      marginRight: 20
    },
    titleStyle:{
      fontSize: 25,
      color: "black",
      marginTop: -10,
      marginBottom: 10
    },
  })