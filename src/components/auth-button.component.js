import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "./spacer.component";

const Container = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
  flex: 1;
  z-index: 1;
`;

const IContainer = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
  flex: 1;
  z-index: 1;
  flex-direction: row;
  position: absolute;
  bottom: 100px;
`;

const Button = styled.TouchableOpacity`
  background-color: #fff;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  position: absolute;
  bottom: 20px;
  z-index: 2;
`;

const ButtonText = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 15px;
  color: #121121;
`;

const Text = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 16px;
  color: ${({ color }) => (color ? color : "#595959")};
`;

export const AuthButton = ({ text, onPress, signup, signin }) => {
  const navigation = useNavigation();

  return (
    <Container>
      {signin && (
        <IContainer>
          <Spacer right={5}>
            <Text>Don’t have an account?</Text>
          </Spacer>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text color="#fff">Sign up</Text>
          </TouchableOpacity>
        </IContainer>
      )}

      {signup && (
        <IContainer>
          <Spacer right={5}>
            <Text> Already have an account?</Text>
          </Spacer>
          <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
            <Text color="#fff">Sign in</Text>
          </TouchableOpacity>
        </IContainer>
      )}

      <Button onPress={onPress}>
        <ButtonText>{text}</ButtonText>
      </Button>
    </Container>
  );
};
