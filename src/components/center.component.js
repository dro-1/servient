import React from "react";
import styled from "styled-components/native";

const Centered = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Center = ({ children }) => <Centered>{children}</Centered>;
