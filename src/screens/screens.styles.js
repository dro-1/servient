import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Logo = styled.Image`
  width: 220px;
  height: 220px;
  margin-bottom: 15px;
  align-self: center;
`;
export const Container = styled.View`
  padding: 30px;
  ${({ pTop }) => pTop && "padding-top: 100px;"}
  ${({ mBottom }) => mBottom && `margin-bottom: ${mBottom}px;`}
  width: ${Dimensions.get("window").width}px;
  position: relative;
  height: ${Dimensions.get("window").height}px;
`;
export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${({ color }) => (color ? color : "#fff")};
  font-size: ${({ size }) => (size ? size : "60")}px;
  text-align: ${({ center }) => (center ? "center" : "left")};
  align-self: ${({ center }) => (center ? " center" : "flex-start")};
  margin-bottom: 15px;
`;

export const Caption = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${({ color }) => (color ? color : "#fff")};
  font-size: ${({ size }) => (size ? size : "20")}px;
`;
