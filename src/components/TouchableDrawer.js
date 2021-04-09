import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Dimensions, Text} from "react-native";
import iconMenu from "../../assets/hamburger.png"

const SCREEN_WIDTH = Dimensions.get("window").width;

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
    paddingBottom: 12
  },
  iconMenu:{
    marginTop: 50,
    marginLeft: 5,
    width: Dimensions.get("window").width-280,
    height:Dimensions.get("window").height-659,
    height: SCREEN_WIDTH * 0.1,
    width: SCREEN_WIDTH * 0.1,
    
  },
  text:{
    textAlign: "center",
    marginLeft: 130,
    marginTop: -35,
    color: "white",
    fontSize: 23,
    fontStyle: "italic",
    fontWeight: "bold",
    backgroundColor: "#525252"
  },
  })
