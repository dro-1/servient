import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Center } from "./../../components/center.component";

export const SettingsScreen = ({ navigation }) => {
  return (
    <Center fill>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>Settings Screen</Text>
      </TouchableOpacity>
    </Center>
  );
};
