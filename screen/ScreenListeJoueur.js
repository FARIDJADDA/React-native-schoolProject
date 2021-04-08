import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  FlatList
} from "react-native";
import iconMenu from "../assets/icon_menu.png"

function Item ({ itemJoueur }) {
    return(
      <View style={styles.rowJoueur}>
        <Image style={styles.imageJoueur} source={{uri:itemJoueur.image}}/>
        <Text style={styles.textTitre}>{itemJoueur.title}</Text>
      </View>
    );
}    

state = {
  data: [
    {
      "id": "0001",
      "image": "https://firebasestorage.googleapis.com/v0/b/moga-61d86.appspot.com/o/userImage%2FmobingameAvatar1.png?alt=media&token=1a27e5f8-69f8-464c-8d42-1777a720a642",
      "title": "DMDProd",
    },
    {
      "id": "0002",
      "image": "https://firebasestorage.googleapis.com/v0/b/moga-61d86.appspot.com/o/userImage%2FmobingameAvatar1.png?alt=media&token=1a27e5f8-69f8-464c-8d42-1777a720a642",
      "title": "Farid",
    },
    {
      "id": "0003",
      "image": "https://firebasestorage.googleapis.com/v0/b/moga-61d86.appspot.com/o/userImage%2FmobingameAvatar1.png?alt=media&token=1a27e5f8-69f8-464c-8d42-1777a720a642",
      "title": "Rokenson",
    },
    {
      "id": "0004",
      "image": "https://firebasestorage.googleapis.com/v0/b/moga-61d86.appspot.com/o/userImage%2FmobingameAvatar1.png?alt=media&token=1a27e5f8-69f8-464c-8d42-1777a720a642",
      "title": "Tiffany",
    },
    {
      "id": "0005",
      "image": "https://firebasestorage.googleapis.com/v0/b/moga-61d86.appspot.com/o/userImage%2FmobingameAvatar1.png?alt=media&token=1a27e5f8-69f8-464c-8d42-1777a720a642",
      "title": "Tiffany",
    },
    {
      "id": "0006",
      "image": "https://firebasestorage.googleapis.com/v0/b/moga-61d86.appspot.com/o/userImage%2FmobingameAvatar1.png?alt=media&token=1a27e5f8-69f8-464c-8d42-1777a720a642",
      "title": "Tiffany",
    },
  ]
}

  export default function ListeJoueur({ navigation }) {
    const renderItem = ({ item }) => (<Item itemJoueur={item} />
    );
    
    return (
      <View style={styles.container}>   
        <View style={styles.rowStart}> 
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={iconMenu} style={styles.iconMenu} />
          </TouchableOpacity>
        </View>
          <FlatList
            data={state.data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
      </View>
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
    rowJoueur:{
      borderWidth:2,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
      borderRadius: 20,
      backgroundColor: "#CECECE"
    },
    iconMenu:{
      marginTop: 40,
      marginLeft: 20
    },
    imageJoueur:{
      height: 100,
      width: 100,
      marginLeft: 20,
      marginRight: 20
    },
    textTitre:{
      fontSize: 25,
      color: "black",
      marginTop: -10,
      marginBottom: 10
    },
  })