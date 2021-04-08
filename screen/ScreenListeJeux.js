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

function Item ({ itemJeux }) {
    return(
      <View style={styles.rowJeux}>
        <Image style={styles.imageJeux} source={{uri:itemJeux.image}}/>
        <Text style={styles.textTitre}>{itemJeux.title}</Text>
      </View>
    );
}    

state = {
  data: [
    {
      "id": "0001",
      "image": "https://firebasestorage.googleapis.com/v0/b/moga-61d86.appspot.com/o/gameImages%2FBrawl_Stars_logo.png?alt=media&token=55e1715c-3ae3-4b14-9b68-130004323ea9",
      "title": "Brawl Stars",
    },
    {
      "id": "0002",
      "image": "https://firebasestorage.googleapis.com/v0/b/moga-61d86.appspot.com/o/gameImages%2FBrawl_Stars_logo.png?alt=media&token=55e1715c-3ae3-4b14-9b68-130004323ea9",
      "title": "Brawl Stars",
    },
    {
      "id": "0003",
      "image": "https://firebasestorage.googleapis.com/v0/b/moga-61d86.appspot.com/o/gameImages%2FBrawl_Stars_logo.png?alt=media&token=55e1715c-3ae3-4b14-9b68-130004323ea9",
      "title": "Brawl Stars",
    },
    {
      "id": "0004",
      "image": "https://firebasestorage.googleapis.com/v0/b/moga-61d86.appspot.com/o/gameImages%2FBrawl_Stars_logo.png?alt=media&token=55e1715c-3ae3-4b14-9b68-130004323ea9",
      "title": "Brawl Stars",
    },
    {
      "id": "0005",
      "image": "https://firebasestorage.googleapis.com/v0/b/moga-61d86.appspot.com/o/gameImages%2FBrawl_Stars_logo.png?alt=media&token=55e1715c-3ae3-4b14-9b68-130004323ea9",
      "title": "Brawl Stars",
    },
    {
      "id": "0006",
      "image": "https://firebasestorage.googleapis.com/v0/b/moga-61d86.appspot.com/o/gameImages%2FBrawl_Stars_logo.png?alt=media&token=55e1715c-3ae3-4b14-9b68-130004323ea9",
      "title": "Brawl Stars",
    },
  ]
}

  export default function ListeJeux({ navigation }) {
    const renderItem = ({ item }) => (<Item itemJeux={item} />
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
    rowJeux:{
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
    imageJeux:{
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