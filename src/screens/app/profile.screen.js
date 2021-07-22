import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Center } from "./../../components/center.component";

export const ProfileScreen = ({ navigation }) => {
  return (
    <Center fill>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>Profile Screen</Text>
      </TouchableOpacity>
    </Center>
  );
};
