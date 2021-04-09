import React from "react";

import { View, StyleSheet, Image, TouchableOpacity, Dimensions, Text, SafeAreaView, StatusBar } from "react-native";

import iconMenu from "../../assets/hamburger.png"
import logoMG from "../../assets/logoMG.png"


export default function Home({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>  
        <StatusBar backgroundColor="#2DA32D" /> 
          <View style={styles.rowStart}> 
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image source={iconMenu} style={styles.iconMenu} />
            </TouchableOpacity>
          </View>
          <View style={styles.rowCenter}>
            <Image style={styles.imageLogoMG} source={logoMG} />
          </View>
          <View style={styles.rowCenter}>
            <Text style={styles.textTitre}>MobinGame</Text>
          </View>
          <View style={styles.rowCenter}>
            <Text style={styles.textDescription}>
              Pour accéder à la liste des joueurs et des jeux, cliquez sur le menu en haut à gauche ou glissez votre doigt de gauche à droite
            </Text>
          </View>
      </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      backgroundColor: "#555252"
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
      marginTop: 10,
      marginLeft: 10,
      width: 60,
      height:60
    },
    imageLogoMG:{
      marginLeft: 29
    },
    textTitre:{
      fontSize: 25,
      color: "white",
      marginTop: -10,
      marginBottom: 10,
      fontStyle: "italic",
      fontWeight: "bold"
    },
    textDescription:{
      fontSize: 18,
      color: "white",
      textAlign: "center",
    }
  })