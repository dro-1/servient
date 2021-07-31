import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/EvilIcons";

const Container = styled.View`
  height: 50px;
  background: rgba(229, 229, 229, 1);
  border: 1px solid rgba(196, 196, 196, 0.25);
  border-radius: 24px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-right: 20px;
`;

const Input = styled.TextInput`
  padding: 10px 20px;
  color: #000;
  width: 90%;
  height: 50px;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  font-family: ${(props) => props.theme.fonts.body};
`;

const ImageContainer = styled.TouchableOpacity`
  height: 30px;
  width: 10%;
`;

export const SearchBox = ({
  placeholder,
  value,
  onChangeText,
  placeholderColor,
}) => {
  return (
    <Container>
      <Input
        placeholder={placeholder ? placeholder : "Password"}
        placeholderTextColor={placeholderColor ? placeholderColor : "#c4c4c4"}
        autoCapitalize="none"
        autoCorrect={true}
        autoCompleteType="off"
        value={value}
        onChangeText={onChangeText}
      />
      <ImageContainer>
        <Icon name="search" size={30} color="#000" />
      </ImageContainer>
    </Container>
  );
};
