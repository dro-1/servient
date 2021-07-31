import React, { useState, useContext, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
import { AuthNavigator } from "./auth.navigator";
import { UserProvider, useUserContext } from "../context/user.context";

export const Navigator = () => {
  const { isSignedIn } = useUserContext();

  useEffect(() => {
    console.log(isSignedIn, "navig");
  }, [isSignedIn]);
  return (
    <NavigationContainer>
      {isSignedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
