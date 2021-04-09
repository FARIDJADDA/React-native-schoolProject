import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from "./src/components/MyDrawer";
import { StatusBar} from "react-native";

export default function App() {

  // ---------------------------- VIEW ----------------------------
  return (
    <NavigationContainer>
    <StatusBar backgroundColor="#2DA32D"/>
      <MyDrawer />
    </NavigationContainer>
  );
}