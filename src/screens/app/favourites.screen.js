import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Center } from "./../../components/center.component";

export const FavouritesScreen = ({ navigation }) => {
  return (
    <Center fill>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>Favourites Screen</Text>
      </TouchableOpacity>
    </Center>
  );
};
