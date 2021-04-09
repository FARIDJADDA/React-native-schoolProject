import React, { useState } from "react";

import { View, StyleSheet, Image, Text, Pressable, Alert} from "react-native";

import AlertDisplay from "./AlertDisplay"


export default function ItemGame ({ itemGame }) {
  const [modalVisible, setModalVisible] = useState(false);

  const close = () =>{
    setModalVisible(false)
  }

  return(
  <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
  <AlertDisplay test={modalVisible} itemGame={itemGame} close={close}/>
    <View style={styles.rowGame}>
        <Image style={styles.imageGame} source={{uri:itemGame.fields.image.stringValue}}/>
        <Text style={styles.titleStyle}>{itemGame.fields.name.stringValue}</Text>
    </View>
  </Pressable>
    );
}  

const styles = StyleSheet.create({
    rowGame:{
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
      marginRight: 20,
      marginTop: 5,
      marginBottom: 5,
      borderRadius: 50
    },
    titleStyle:{
      fontSize: 20,
      color: "black",
      marginTop: -10,
      marginBottom: 10
    },
  })