import React from "react";
import styled from "styled-components/native";
import { Image, View } from "react-native";

import { Title, Caption } from "./../screens/screens.styles";
import { Spacer } from "./spacer.component";

const Container = styled.View`
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const TouchContainer = styled.TouchableOpacity`
  width: 100%;
`;

const TextContainer = styled.View`
  flex-direction: column;
`;

const ButtonContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;

const Button1 = styled.TouchableOpacity`
  background: #39ba70;
  border-radius: 16px;
  padding: 10px;
  color: #fff;
`;

const Button2 = styled.TouchableOpacity`
  background: #000;
  border-radius: 16px;
  padding: 10px;
  color: #fff;
`;

export const Handyman = ({ name, img, navigation }) => {
  return (
    <TouchContainer onPress={() => navigation.navigate("Laundry")}>
      <Spacer bottom={30}>
        <Title mBottom="0" size={20} color="#000">
          {name}
        </Title>
        <Container
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Image source={img} />
          <TextContainer>
            <View>
              <Caption size={15} color="#000">
                Mon-Fri (8am-6pm){" "}
              </Caption>
            </View>
            <View>
              <Caption size={15} color="#000">
                off aina street, casem...
              </Caption>
            </View>
            <View>
              <Caption size={15} color="#000">
                10.3km
              </Caption>
            </View>
          </TextContainer>
          <View>
            <Button1>
              <Caption center size={15}>
                Open
              </Caption>
            </Button1>
            <Button2>
              <Caption center size={15}>
                Call
              </Caption>
            </Button2>
          </View>
        </Container>
      </Spacer>
    </TouchContainer>
  );
};
