import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";

import iconMenu from "../../assets/icon_menu.png"
import ItemPlayer from "../components/ItemPlayer";
import axios from 'axios';
import TouchableDrawer from '../components/TouchableDrawer';

  export default function PlayerList({ navigation }) {

    const [dataPlayer, setDataPlayer] = useState([]);
    useEffect(() => {
      axios
        .get('https://firestore.googleapis.com/v1/projects/mogareactapp/databases/(default)/documents/player')
        .then((res) => setDataPlayer(res.data.documents))

        // fetch('https://firestore.googleapis.com/v1/projects/mogareactapp/databases/(default)/documents/player')
        // .then((response) => response.json())
        // .then((json) => setDataPlayer(json.documents))
        
    }, []);

    const renderItem = ({ item }) => (<ItemPlayer itemPlayer={item} />
    );
    
    return (
      <View style={styles.container}>   
        <TouchableDrawer navigation={navigation}/>
          <FlatList
            data={dataPlayer}
            renderItem={renderItem}
            keyExtractor={itemPlayer => itemPlayer.id}
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
    iconMenu:{
      marginTop: 40,
      marginLeft: 20
    },
  })