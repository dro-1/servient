import React from "react";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_800ExtraBold,
} from "@expo-google-fonts/nunito-sans";
import { ActivityIndicator, Colors } from "react-native-paper";
import { ThemeProvider } from "styled-components";

import theme from "./src/theme";
import { Navigator } from "./src/navigators";
import { Text } from "react-native";
import { Center } from "./src/components/center.component";
import { UserProvider } from "./src/context/user.context";

export default function App() {
  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_800ExtraBold,
  });
  if (!fontsLoaded) {
    return (
      <Center>
        <ActivityIndicator animating={true} color={Colors.red800} />
      </Center>
    );
    //return <Text style={{ paddingTop: 200 }}>Fonts not loaded</Text>;
  }
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Navigator />
      </ThemeProvider>
    </UserProvider>
    // <Text style={{ paddingTop: 200 }}>Hello World</Text>
  );
}
