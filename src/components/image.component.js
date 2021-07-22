import React from "react";
import styled from "styled-components/native";

const ImageI = styled.Image`
  ${({ mWidth, wRelative }) =>
    `width: ${mWidth ? mWidth : 100}${wRelative ? "%" : "px"};`}
  ${({ mHeight }) => `height: ${mHeight ? mHeight : 100}px;`}
`;

export const Image = ({ width, height, ...props }) => (
  <ImageI mWidth={width} mHeight={height} {...props} />
);
