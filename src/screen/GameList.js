import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";

import iconMenu from "../../assets/icon_menu.png"
import ItemGame from "../components/ItemGame";
import axios from 'axios';

  export default function GameList({ navigation }) {

    const [dataGames, setDataGames] = useState([]);
    useEffect(() => {
      axios
        .get('https://firestore.googleapis.com/v1/projects/mogareactapp/databases/(default)/documents/player')
        .then((res) => setDataGames(res.data.documents))

        // fetch('https://firestore.googleapis.com/v1/projects/mogareactapp/databases/(default)/documents/player')
        // .then((response) => response.json())
        // .then((json) => setDataGames(json.documents))
        
    }, []);

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