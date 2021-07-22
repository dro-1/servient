import React, { useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../components/safe-area.component";
import { AuthButton } from "../../components/auth-button.component";
import { Container, Title, Caption } from "../screens.styles";
import { Spacer } from "../../components/spacer.component";
import { PasswordInput } from "../../components/password.component";

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
`;

export const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <SafeArea color="#121121">
      <Container>
        <TouchableOpacity>
          <Image source={require("./../../../assets/images/arrow-back.png")} />
        </TouchableOpacity>
        <Spacer top={20} bottom={20}>
          <Title size={45}>Create an account.</Title>
        </Spacer>
        <Caption>Welcome to the world.</Caption>

        <View
          style={{
            paddingVertical: 20,
            justifyContent: "space-between",
            height: Dimensions.get("window").height * 0.45,
          }}
        >
          <Input
            onChangeText={setName}
            value={name}
            placeholder="Name"
            placeholderTextColor="#595959"
            keyboardType="default"
          />

          <Input
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor="#595959"
            keyboardType="email-address"
          />
          <PasswordInput
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
          />
          <PasswordInput
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            placeholder="Confirm Password"
          />
        </View>
        <AuthButton
          text="Sign Up"
          onPress={() => navigation.navigate("Signin")}
          signup
        />
      </Container>
    </SafeArea>
  );
};
