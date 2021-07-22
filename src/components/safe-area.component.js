import React from "react";
import styled from "styled-components/native";

import { StatusBar, ScrollView } from "react-native";

const SafeAreaContainer = styled.SafeAreaView`
  margin-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 0}px;
  flex: 1;
  width: 100%;
  ${({ pTop }) => !pTop && `justify-content: center`};
  align-items: center;
  background-color: ${({ color }) => (color ? color : "#fff")};
  ${({ pTop }) => pTop && `padding-top: ${pTop}px`};
  position: relative;
`;

export const SafeArea = ({ children, color, top }) => {
  return (
    <SafeAreaContainer pTop={top} color={color}>
      <ScrollView>{children}</ScrollView>
      {/* {children} */}
    </SafeAreaContainer>
  );
};
