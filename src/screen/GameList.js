import React, { useState, useEffect } from 'react';
import { View, StyleSheet,FlatList } from "react-native";
import ItemGame from "../components/ItemGame";
import axios from 'axios';
import TouchableDrawer from '../components/TouchableDrawer';

  export default function GameList({ navigation }) {

    const [dataGames, setDataGames] = useState([]);
    useEffect(() => {
      axios
        .get('https://firestore.googleapis.com/v1/projects/mogareactapp/databases/(default)/documents/game')
        .then((res) => setDataGames(res.data.documents))

        // fetch('https://firestore.googleapis.com/v1/projects/mogareactapp/databases/(default)/documents/player')
        // .then((response) => response.json())
        // .then((json) => setDataGames(json.documents))
        
    }, []);

    const renderItem = ({ item }) => (<ItemGame itemGame={item} />
    );
    
    return (
      <View style={styles.container}>   
        <TouchableDrawer navigation={navigation}/>
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
    iconMenu:{
      marginTop: 40,
      marginLeft: 20
    }
  })