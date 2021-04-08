import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from "./src/components/MyDrawer";

export default function App() {

  // ---------------------------- VIEW ----------------------------
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}