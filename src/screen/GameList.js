import React from "react";

import { View, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";

import iconMenu from "../../assets/icon_menu.png"
import ItemGame from "../components/ItemGame";


  const dataGames= [
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

  export default function GameList({ navigation }) {
    const renderItem = ({ item }) => (<ItemGame itemGame={item} />
    );
    
    return (
      <View style={styles.container}>   
        <View style={styles.rowStart}> 
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={iconMenu} style={styles.iconMenu} />
          </TouchableOpacity>
        </View>
          <FlatList
            data={dataGames}
            renderItem={renderItem}
            keyExtractor={itemGame => itemGame.id}
          />
      </View>
    );
  }

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
    iconMenu:{
      marginTop: 40,
      marginLeft: 20
    }
  })