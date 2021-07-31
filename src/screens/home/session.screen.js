import React from "react";
import styled from "styled-components/native";

import { SafeArea } from "../../components/safe-area.component";
import { Container, Title } from "../screens.styles";
import { Spacer } from "../../components/spacer.component";

const Image = styled.Image`
  width: 200px;
  height: 200px;
`;
const BookButton = styled.TouchableOpacity`
  background-color: #000;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 15px;
  width: 100px;
  width: 100%;
  margin-top: 500px;
`;

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
`;

export const SessionScreen = ({ navigation }) => {
  return (
    <SafeArea color="#fff">
      <Container>
        <Spacer top={150}>
          <Wrapper>
            <Image source={require("./../../../assets/images/progress.png")} />
            <Spacer top={20}>
              <Title color="#d4d4d4" center size={30}>
                Session In Progress
              </Title>
            </Spacer>
          </Wrapper>
        </Spacer>
        <BookButton onPress={() => navigation.navigate("Confirm")}>
          <Title mBottom="0" color="#d4d4d4" size={20}>
            End Session
          </Title>
        </BookButton>
      </Container>
    </SafeArea>
  );
};
