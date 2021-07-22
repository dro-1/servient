import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { AuthScreen } from "./../screens/auth/auth.screen";
import { SignInScreen } from "./../screens/auth/signin.screen";
import { SignUpScreen } from "./../screens/auth/signup.screen";

export const AuthNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="Signin" component={SignInScreen} />
    </Stack.Navigator>
  );
};
