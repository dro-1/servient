import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeScreen } from "../screens/app/home.screen";
import { ProfileScreen } from "../screens/app/profile.screen";
import { SettingsScreen } from "../screens/app/settings.screen";
import { DrawerContent } from "../components/drawer.component";
import { BookingScreen } from "../screens/app/bookings.screen";
import { FavouritesScreen } from "../screens/app/favourites.screen";

export const AppNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={DrawerContent}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Bookings" component={BookingScreen} />
      <Drawer.Screen name="Favourites" component={FavouritesScreen} />
    </Drawer.Navigator>
  );
};
