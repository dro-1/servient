import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../components/safe-area.component";
import { Container } from "../screens.styles";
import { Header } from "../../components/header.component";

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeArea color="#fff">
      <Container>
        <Header />
      </Container>
    </SafeArea>
  );
};
