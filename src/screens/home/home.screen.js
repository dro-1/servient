import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../components/safe-area.component";
import { Container, Title } from "../screens.styles";
import { Header } from "../../components/header.component";
import { SearchBox } from "../../components/searchbox.component";
import { Spacer } from "../../components/spacer.component";
import { Category } from "../../components/category.component";

const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 200px;
  justify-content: center;
  padding-right: 100px;
`;

const Categories = styled.View`
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
  padding: 20px 0;
`;

export const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <SafeArea color="#fff">
      <Container>
        <Header hamburgerPress={() => navigation.openDrawer()} />
        <Spacer top={20}>
          <SearchBox
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
          />
        </Spacer>
        <Spacer top={10}>
          <Title size={30} color="#000">
            Hi Babara
          </Title>
        </Spacer>
        <ImageBackground
          width={100}
          height={200}
          source={require("./../../../assets/images/categories-bg.png")}
          wRelative
        >
          <Title size={30} color="#132E69">
            What service do you need ?
          </Title>
        </ImageBackground>
        <Spacer top={10}>
          <Title size={30} color="#000">
            Categories
          </Title>
        </Spacer>
        <Categories>
          <Category
            title="Plumbing"
            source={require("./../../../assets/images/plumbing.png")}
            onClick={() => navigation.navigate("Category")}
          />
          <Category
            title="House Keeping"
            source={require("./../../../assets/images/housekeeping.png")}
          />
          <Category
            title="Laundry"
            source={require("./../../../assets/images/laundry.png")}
          />
          <Category
            title="Gardening"
            source={require("./../../../assets/images/gardening.png")}
          />
        </Categories>
      </Container>
    </SafeArea>
  );
};
