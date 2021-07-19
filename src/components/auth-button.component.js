import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
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
`;

const Text = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 15px;
  color: #121121;
`;

export const AuthButton = ({ text }) => (
  <Container>
    <Button>
      <Text>{text}</Text>
    </Button>
  </Container>
);
