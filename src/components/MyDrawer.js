import {  createDrawerNavigator } from '@react-navigation/drawer';
import React from "react";
import PlayerList from "../screen/PlayerList";
import Home from "../screen/Home";
import GameList from "../screen/GameList";

const Drawer = createDrawerNavigator();
  
export default function MyDrawer() {
    return (
      <Drawer.Navigator initialRouteName="Accueil">
        <Drawer.Screen name="Accueil" component={Home} />
        <Drawer.Screen name="Liste des joueurs" component={PlayerList} />
        <Drawer.Screen name="Liste des jeux" component={GameList} />
      </Drawer.Navigator>
    );
  }