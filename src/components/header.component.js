import React from "react";
import styled from "styled-components/native";

import { Image } from "./image.component";

const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 90%;
`;

export const Header = () => {
  return (
    <Container>
      <Image
        width={50}
        height={50}
        source={require("./../../assets/images/hamburger.png")}
      />
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
