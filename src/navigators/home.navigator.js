import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens/home/home.screen";
import { CategoryScreen } from "../screens/home/category.screen";
import { LaundryScreen } from "../screens/home/laundry.screen";

export const HomeNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Laundry" component={LaundryScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
