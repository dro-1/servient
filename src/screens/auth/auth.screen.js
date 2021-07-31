import React from "react";

import { SafeArea } from "../../components/safe-area.component";
import { AuthButton } from "../../components/auth-button.component";
import { Container, Logo, Title, Caption } from "../screens.styles";
import { Spacer } from "../../components/spacer.component";

export const AuthScreen = ({ navigation }) => {
  return (
    <SafeArea color="#121121">
      <Container pTop={true}>
        <Logo source={require("./../../../assets/images/logo.png")} />
        <Title>Handees</Title>
        <Caption>Household services at the touch of a button...</Caption>
        <Spacer top={250}>
          <AuthButton
            text="Next"
            onPress={() => navigation.navigate("Signin")}
          />
        </Spacer>
      </Container>
    </SafeArea>
  );
};
