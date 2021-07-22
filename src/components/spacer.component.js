import React from "react";
import styled from "styled-components/native";

const Spaced = styled.View`
  ${({ mTop }) => mTop && `margin-top: ${mTop}px;`}
  ${({ mLeft }) => mLeft && `margin-left: ${mLeft}px;`}
    ${({ mBottom }) => mBottom && `margin-bottom: ${mBottom}px;`}
    ${({ mRight }) => mRight && `margin-right: ${mRight}px;`}
    ${({ color }) => color && `background-color: ${color};`}
`;

export const Spacer = ({ children, top, left, right, bottom, color }) => {
  return (
    <Spaced
      color={color}
      mTop={top}
      mLeft={left}
      mRight={right}
      mBottom={bottom}
    >
      {children}
    </Spaced>
  );
};
