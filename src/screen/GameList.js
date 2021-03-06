import React, { useState, useEffect } from 'react';

import { View, StyleSheet,FlatList, StatusBar } from "react-native";

import ItemGame from "../components/ItemGame";
import TouchableDrawer from '../components/TouchableDrawer';

import axios from 'axios';


  export default function GameList({ navigation }) {

    const [dataGames, setDataGames] = useState([]);
    useEffect(() => {
      axios
        .get('https://firestore.googleapis.com/v1/projects/mogareactapp/databases/(default)/documents/game')
        .then((res) => setDataGames(res.data.documents))

        // fetch('https://firestore.googleapis.com/v1/projects/mogareactapp/databases/(default)/documents/game')
        // .then((response) => response.json())
        // .then((json) => setDataGames(json.documents))
        
    }, []);

    const renderItem = ({ item }) => (<ItemGame itemGame={item} />
    );
    
    return (
      <View style={styles.container}>  
      <StatusBar backgroundColor="#2DA32D"/> 
        <TouchableDrawer navigation={navigation}/>
          <FlatList style={styles.card}
            data={dataGames}
            renderItem={renderItem}
            keyExtractor={itemGame => itemGame.fields.id.stringValue}
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
    card: {
      margin: 17
    }
  })