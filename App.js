import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';

import ScreenAccueil from "./screen/ScreenAccueil"
import ScreenListJoueur from "./screen/ScreenListeJoueur"
import ScreenListJeux from "./screen/ScreenListeJeux"

  // ---------------------------- MENU DRAWER ----------------------------
  
  const Drawer = createDrawerNavigator();
  
  function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Accueil" component={ScreenAccueil} />
        <Drawer.Screen name="Liste des joueurs" component={ScreenListJoueur} />
        <Drawer.Screen name="Liste des jeux" component={ScreenListJeux} />
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