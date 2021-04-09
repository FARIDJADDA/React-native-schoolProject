import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Dimensions, Text} from "react-native";
import iconMenu from "../../assets/hamburger.png"

export default function TouchableDrawer({ navigation }){
        return (
          <View style={styles.rowStart}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={iconMenu} style={styles.iconMenu} />
            <Text style={styles.text}>MobinGame</Text>
          </TouchableOpacity>
          </View>
        )
}

const styles = StyleSheet.create({
  rowStart:{
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 6,
    backgroundColor: "#525252",
    paddingBottom: 19
  },
  iconMenu:{
    marginTop: 25,
    marginLeft: 10,
    width: 60,
    height:60
  },
  text:{
    textAlign: "center",
    marginLeft: 133,
    marginTop: -45,
    color: "white",
    fontSize: 23,
    fontStyle: "italic",
    fontWeight: "bold",
    backgroundColor: "#525252"
  },
  })
