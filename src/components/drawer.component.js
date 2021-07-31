import React from "react";
import styled from "styled-components/native";
import { View, StatusBar } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import FAIcon from "react-native-vector-icons/FontAwesome";

import { Caption, Title } from "../screens/screens.styles";
import { Border } from "./border.component";
import { Spacer } from "./spacer.component";

const Image = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  align-self: center;
`;

const Container = styled.View`
  padding: 0 20px;
  width: 100%;
  flex: 1;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight + 50}px;`}
  /* background-color: #000; */
`;

const LogoutContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  width: 120px;
  flex-direction: row;
  padding-left: 20px;
`;

export const DrawerContent = (props) => {
  const { state, navigation } = props;
  const { routes, index } = state;
  const focusedRoute = routes[index].name;
  return (
    <Container>
      <Border color="#c4c4c4" size={1} bottom>
        <Spacer bottom={10}>
          <Spacer bottom={10}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
              }}
            />
          </Spacer>
          <Title color="#000" size={30} center>
            Seun Taiwo
          </Title>
        </Spacer>
      </Border>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          focused={focusedRoute === "Home"}
          label="Home"
          icon={({ focused }) => (
            <Icon
              color="#000"
              size={30}
              name={focused ? "home" : "home-outline"}
            />
          )}
          onPress={() => navigation.navigate("Home")}
        />
        <DrawerItem
          focused={focusedRoute === "Favourites"}
          label="Favourites"
          icon={({ focused }) => (
            <FAIcon
              color="#000"
              size={30}
              name={focused ? "heart" : "heart-o"}
            />
          )}
          onPress={() => navigation.navigate("Favourites")}
        />
        <DrawerItem
          focused={focusedRoute === "Bookings"}
          label="Bookings"
          icon={({ focused }) => (
            <Icon
              color="#000"
              size={30}
              name={focused ? "list-circle" : "list-circle-outline"}
            />
          )}
          onPress={() => navigation.navigate("Bookings")}
        />
        <DrawerItem
          focused={focusedRoute === "Profile"}
          label="Profile"
          icon={({ focused }) => (
            <FAIcon color="#000" size={30} name={focused ? "user" : "user-o"} />
          )}
          onPress={() => navigation.navigate("Profile")}
        />
        <DrawerItem
          focused={focusedRoute === "Settings"}
          label="Settings"
          icon={({ focused }) => (
            <Icon
              color="#000"
              size={30}
              name={focused ? "settings" : "settings-outline"}
            />
          )}
          onPress={() => navigation.navigate("Settings")}
        />
      </DrawerContentScrollView>
      <Border color="#c4c4c4" size={1} top>
        <Spacer top={30} bottom={100}>
          <LogoutContainer>
            <Icon color="#000" size={40} name="log-out-outline" />
            <Caption color="#000" size={15}>
              Log out
            </Caption>
          </LogoutContainer>
        </Spacer>
      </Border>
    </Container>
  );
};
