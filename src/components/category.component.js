import React from "react";
import styled from "styled-components/native";

import { Title } from "../screens/screens.styles";
import { Spacer } from "./spacer.component";
import { Image } from "./image.component";

const Container = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
`;

export const Category = ({ title, source, onClick }) => {
  return (
    <Container onPress={onClick}>
      <Image width={100} height={130} wRelative source={source} />
      <Spacer top={10}>
        <Title size={20} color="#000" center>
          {title}
        </Title>
      </Spacer>
    </Container>
  );
};
