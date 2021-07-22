import React from "react";
import styled from "styled-components/native";

const Centered = styled.View`
  justify-content: center;
  align-items: center;
  ${({ fill }) => fill && "flex: 1;"}
`;

export const Center = ({ children, fill }) => (
  <Centered fill={fill}>{children}</Centered>
);
