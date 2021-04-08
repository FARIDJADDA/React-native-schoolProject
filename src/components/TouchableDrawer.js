import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity} from "react-native";
import iconMenu from "../../assets/icon_menu.png"

export default function TouchableDrawer({ navigation }){
        return (
          <View style={styles.rowStart}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={iconMenu} style={styles.iconMenu} />
          </TouchableOpacity>
          </View>
        )
}

const styles = StyleSheet.create({
  rowStart:{
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10
  },
    iconMenu:{
      marginTop: 40,
      marginLeft: 20
    }
  })
