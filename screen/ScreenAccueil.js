import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
  SafeAreaView} from "react-native";
import iconMenu from "../assets/icon_menu.png"
import logoMG from "../assets/logoMG.png"


export default function Accueil({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>   
        <View style={styles.rowStart}> 
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={iconMenu} style={styles.iconMenu}/>
          </TouchableOpacity>
        </View>
        <View style={styles.rowCenter}>
          <Image style={styles.imageLogoMG} source={logoMG}/>
        </View>
        <View style={styles.rowCenter}>
          <Text style={styles.textTitre}>MobinGame</Text>
        </View>
        <View style={styles.rowCenter}>
          <Text style={styles.textDescription}>Pour accéder à la liste des joueurs et des jeux, cliquez sur le menu en haut à gauche ou glissez votre doigt de gauche à droite</Text>
        </View>
      </SafeAreaView>
    );
  }

  // ---------------------------- STYLE ----------------------------

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      backgroundColor: "#7F7F7F"
    },
    rowStart:{
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginBottom: 10
    },
    rowCenter:{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10
    },
    iconMenu:{
      marginTop: 40,
      marginLeft: 20
    },
    imageLogoMG:{
      width: Dimensions.get("window").width-250,
      height:Dimensions.get("window").height-450
    },
    textTitre:{
      fontSize: 25,
      color: "black",
      marginTop: -10,
      marginBottom: 10
    },
    textDescription:{
      fontSize: 18,
      color: "black",
      textAlign: "center",
    }
  })