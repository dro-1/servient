import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
import { AuthNavigator } from "./auth.navigator";

export const Navigator = () => {
  const [userExist, setUserExist] = useState(true);
  return (
    <NavigationContainer>
      {userExist ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
