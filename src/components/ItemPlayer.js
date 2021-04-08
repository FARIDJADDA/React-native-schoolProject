import React from "react";

import { View, Image, Text, StyleSheet } from "react-native";

export default function ItemPlayer ({ itemPlayer }) {
    return(
      <View style={styles.rowPlayer}>
        <Image style={styles.imagePlayer} source={{uri:itemPlayer.fields.image.stringValue}}/>
        <Text style={styles.titleStyle}>{itemPlayer.fields.name.stringValue}</Text>
      </View>
    );
} 

const styles = StyleSheet.create({
    rowPlayer:{
      borderWidth:2,
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
      marginRight: 20
    },
    titleStyle:{
      fontSize: 25,
      color: "black",
      marginTop: -10,
      marginBottom: 10
    },
  })