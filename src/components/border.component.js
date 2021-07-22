import React from "react";
import styled from "styled-components/native";

const Bordered = styled.View`
  border-style: solid;
  ${({ mBottom, color, size }) =>
    mBottom &&
    `border-bottom-color: ${color}
                border-bottom-width: ${size}px
    `}
  ${({ mTop, color, size }) =>
    mTop &&
    `border-top-color: ${color}
                border-top-width: ${size}px
    `}
    ${({ mLeft, color, size }) =>
    mLeft &&
    `border-left-color: ${color}
                border-left-width: ${size}px
    `}
    ${({ mRight, color, size }) =>
    mRight &&
    `border-right-color: ${color}
                border-right-width: ${size}px
    `}
`;

export const Border = ({ color, size, bottom, top, left, right, children }) => (
  <Bordered
    color={color}
    size={size}
    mBottom={bottom}
    mTop={top}
    mLeft={left}
    mRight={right}
  >
    {children}
  </Bordered>
);
