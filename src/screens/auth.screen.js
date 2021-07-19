import React from "react";
import styled from "styled-components/native";

import { Text, Image } from "react-native";

import { SafeArea } from "../components/safe-area.component";
import { AuthButton } from "../components/auth-button.component";

const Logo = styled.Image`
  width: 220px;
  height: 220px;
  margin-bottom: 15px;
  align-self: center;
`;
const Container = styled.View`
  padding: 30px;
  flex: 1;
  width: 100%;
  position: relative;
`;
const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  color: #fff;
  font-size: 60px;
  text-align: left;
  align-self: flex-start;
  margin-bottom: 15px;
`;

const Caption = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  color: #fff;
  font-size: 20px;
`;

export const AuthScreen = () => {
  return (
    <SafeArea top={100} color="#121121">
      <Container>
        <Logo source={require("./../../assets/images/logo.png")} />
        <Title>Servient</Title>
        <Caption>Household services at the touch of a button...</Caption>
        <AuthButton text="Next" />
      </Container>
    </SafeArea>
  );
};
