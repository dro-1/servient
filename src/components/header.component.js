import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Image } from "./image.component";

const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const Header = ({ hamburgerPress }) => {
  return (
    <Container>
      <TouchableOpacity onPress={hamburgerPress}>
        <Image
          width={50}
          height={50}
          source={require("./../../assets/images/hamburger.png")}
        />
      </TouchableOpacity>
      <Image
        width={50}
        height={50}
        source={require("./../../assets/images/logo-colored.png")}
      />
      <Image
        width={70}
        height={70}
        source={require("./../../assets/images/user-image.png")}
      />
    </Container>
  );
};
