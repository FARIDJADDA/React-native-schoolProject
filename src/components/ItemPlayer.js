import React, { useState, useEffect } from "react";

import { View, Image, Text, StyleSheet, Pressable, } from "react-native";
import AlertDisplay from "./AlertDisplay"

export default function ItemPlayer ({ itemPlayer }) {
  const [modalVisible, setModalVisible] = useState(false);

  const close = () =>{
    setModalVisible(false)
  }


    return(
      <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
  <AlertDisplay test={modalVisible} itemGame={itemPlayer} close={close}/>
      <View style={styles.rowPlayer}>
        <Image style={styles.imagePlayer} source={{uri:itemPlayer.fields.image.stringValue}}/>
        <Text style={styles.titleStyle}>{itemPlayer.fields.name.stringValue}</Text>
      </View>
      </Pressable>
    );
} 

const styles = StyleSheet.create({
    rowPlayer:{
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
      borderRadius: 20,
      backgroundColor: "#CECECE"
    },
    imagePlayer:{
      height: 100,
      width: 100,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 5,
      marginBottom: 5
    },
    titleStyle:{
      fontSize: 20,
      color: "black",
      marginTop: -10,
      marginBottom: 10
    },
  })
