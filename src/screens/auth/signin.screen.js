import React, { useState, useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../components/safe-area.component";
import { AuthButton } from "../../components/auth-button.component";
import { Container, Title, Caption } from "../screens.styles";
import { Spacer } from "../../components/spacer.component";
import { PasswordInput } from "../../components/password.component";
import { useUserContext } from "../../context/user.context";

const Image = styled.Image`
  width: 30px;
  height: 30px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 70px;
  background: rgba(196, 196, 196, 0.15);
  border: 2px solid rgba(229, 229, 229, 0.3);
  border-radius: 24px;
  padding: 20px;
  color: #fff;
  font-family: ${(props) => props.theme.fonts.body};
`;

export const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setIsSignedIn } = useUserContext();

  return (
    <SafeArea color="#121121">
      <Container>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("./../../../assets/images/arrow-back.png")} />
        </TouchableOpacity>
        <Spacer top={20}>
          <Title size={45}>Let’s sign you in.</Title>
        </Spacer>
        <Spacer>
          <Caption>Welcome back.</Caption>
        </Spacer>
        <Spacer top={60} bottom={20}>
          <Input
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor="#595959"
            keyboardType="email-address"
          />
        </Spacer>
        <PasswordInput
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          placeholderTextColor="#595959"
        />
        <Spacer top={250}>
          <AuthButton
            text="Sign In"
            onPress={() => setIsSignedIn(true)}
            signin
          />
        </Spacer>
      </Container>
    </SafeArea>
  );
};
