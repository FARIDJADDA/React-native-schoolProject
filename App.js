import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import {  createDrawerNavigator } from '@react-navigation/drawer';


import PlayerList from "./src/screen/PlayerList";
import Home from "./src/screen/Home";
import GameList from "./src/screen/GameList"

  // ---------------------------- MENU DRAWER ----------------------------
  
  const Drawer = createDrawerNavigator();
  
  function MyDrawer() {
    return (
      <Drawer.Navigator initialRouteName="Accueil">
        <Drawer.Screen name="Accueil" component={Home} />
        <Drawer.Screen name="Liste des joueurs" component={PlayerList} />
        <Drawer.Screen name="Liste des jeux" component={GameList} />
      </Drawer.Navigator>
    );
  }


export default function App() {

  // ---------------------------- VIEW ----------------------------
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}