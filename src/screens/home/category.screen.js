import React, { useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { SafeArea } from "../../components/safe-area.component";
import { Container } from "../screens.styles";
import { Spacer } from "../../components/spacer.component";
import { SearchBox } from "../../components/searchbox.component";
import { Handyman } from "../../components/handyman.component";

const Image = styled.Image`
  width: 30px;
  height: 30px;
`;

export const CategoryScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <SafeArea color="#fff">
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("./../../../assets/images/arrow-back-dark.png")}
          />
        </TouchableOpacity>
        <Spacer top={20} bottom={40}>
          <SearchBox
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
          />
        </Spacer>
        <Handyman
          name="Tee Nice 'N' Clean"
          img={require("./../../../assets/images/laundry-1.png")}
          navigation={navigation}
        />
        <Handyman
          name="Speedy Laundry"
          img={require("./../../../assets/images/laundry-2.png")}
          navigation={navigation}
        />
        <Handyman
          name="Any Wash"
          img={require("./../../../assets/images/laundry-3.png")}
          navigation={navigation}
        />
      </Container>
    </SafeArea>
  );
};
