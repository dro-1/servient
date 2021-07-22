import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeScreen } from "../screens/app/home.screen";

export const AppNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};
