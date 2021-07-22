import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Center } from "./../../components/center.component";

export const BookingScreen = ({ navigation }) => {
  return (
    <Center fill>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>Booking Screen</Text>
      </TouchableOpacity>
    </Center>
  );
};
