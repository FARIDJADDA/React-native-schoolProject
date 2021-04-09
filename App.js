import React from "react";
import { StatusBar} from "react-native";

import { NavigationContainer } from '@react-navigation/native';

import MyDrawer from "./src/components/MyDrawer";

export default function App() {

  return (
    <NavigationContainer>
    <StatusBar backgroundColor="#2DA32D"/>
      <MyDrawer />
    </NavigationContainer>
  );
}