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
  width: 100%;
  position: relative;
  height: ${Dimensions.get("window").height}px;
`;
export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  color: #fff;
  font-size: ${({ size }) => (size ? size : "60")}px;
  text-align: left;
  align-self: flex-start;
  margin-bottom: 15px;
`;

export const Caption = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  color: #fff;
  font-size: 20px;
`;
