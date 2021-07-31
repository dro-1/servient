import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens/home/home.screen";
import { CategoryScreen } from "../screens/home/category.screen";
import { LaundryScreen } from "../screens/home/laundry.screen";
import { ConfirmScreen } from "../screens/home/confirm.screen";
import { SessionScreen } from "../screens/home/session.screen";

export const HomeNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Session" component={SessionScreen} />
      <Stack.Screen name="Confirm" component={ConfirmScreen} />
      <Stack.Screen name="Laundry" component={LaundryScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
    </Stack.Navigator>
  );
};
