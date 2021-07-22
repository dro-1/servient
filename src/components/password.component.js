import React, { useState } from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Entypo";
import { TouchableOpacity } from "react-native";

const Input = styled.TextInput`
  padding: 20px;
  color: #fff;
  width: 90%;
  height: 70px;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
`;

const ImageContainer = styled.TouchableOpacity`
  height: 30px;
  width: 10%;
`;

const Image = styled.Image`
  height: 30px;
  width: 100%;
`;

const Container = styled.View`
  width: 100%;
  height: 70px;
  background: rgba(196, 196, 196, 0.15);
  border: 2px solid rgba(229, 229, 229, 0.3);
  border-radius: 24px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-right: 20px;
`;

export const PasswordInput = ({
  placeholder,
  value,
  onChangeText,
  placeholderColor,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container>
      <Input
        placeholder={placeholder ? placeholder : "Password"}
        placeholderTextColor={placeholderColor ? placeholderColor : "#595959"}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="off"
        secureTextEntry={!showPassword}
        value={value}
        onChangeText={onChangeText}
      />
      <ImageContainer
        onPress={() => setShowPassword((showPassword) => !showPassword)}
      >
        {/* <Image
          source={
            showPassword
              ? require("./../../assets/images/eye-open.png")
              : require("./../../assets/images/eye-closed.png")
          }
        /> */}
        {showPassword ? (
          <Icon name="eye-with-line" size={30} color="#595959" />
        ) : (
          <Icon name="eye" size={30} color="#fff" />
        )}
      </ImageContainer>
    </Container>
  );
};
