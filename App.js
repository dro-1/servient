import React from "react";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_800ExtraBold,
} from "@expo-google-fonts/nunito-sans";
import { ActivityIndicator, Colors } from "react-native-paper";
import { ThemeProvider } from "styled-components";

import { AuthScreen } from "./src/screens/auth.screen";
import theme from "./src/theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  }
  return (
    <ThemeProvider theme={theme}>
      <AuthScreen />
    </ThemeProvider>
  );
}
