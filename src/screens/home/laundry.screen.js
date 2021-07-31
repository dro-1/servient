import React, { useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Dimensions, View, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontIcon from "react-native-vector-icons/FontAwesome";

import { SafeArea } from "../../components/safe-area.component";
import { Container, Title, Caption } from "../screens.styles";
import { Spacer } from "../../components/spacer.component";

const Image = styled.Image`
  width: 30px;
  height: 30px;
`;
const ImageBackground = styled.ImageBackground`
  width: ${Dimensions.get("window").width}px;
  height: 200px;
  padding-right: 100px;
  background-color: red;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
`;

const TitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ScrollImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

const FlatListWrapper = styled.View`
  width: ${Dimensions.get("window").width}px;
`;

const Nav = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Button2 = styled.TouchableOpacity`
  background: #000;
  border-radius: 16px;
  padding: 10px;
  color: #fff;
  width: 70px;
`;

const BookButton = styled.TouchableOpacity`
  background-color: #000;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 15px;
`;

const IMAGES = [
  {
    img: require("./../../../assets/images/laundry-image-1.png"),
    idx: 0,
  },
  {
    img: require("./../../../assets/images/laundry-image-2.png"),
    idx: 1,
  },
  {
    img: require("./../../../assets/images/laundry-image-3.png"),
    idx: 2,
  },
  {
    img: require("./../../../assets/images/laundry-image-4.png"),
    idx: 3,
  },
  {
    img: require("./../../../assets/images/laundry-image-1.png"),
    idx: 4,
  },
  {
    img: require("./../../../assets/images/laundry-image-2.png"),
    idx: 5,
  },
];

export const LaundryScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <SafeArea color="#fff">
      <Container>
        <ImageBackground
          width={100}
          height={200}
          source={require("./../../../assets/images/laundry-map.png")}
          wRelative
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={require("./../../../assets/images/arrow-back-dark.png")}
            />
          </TouchableOpacity>
        </ImageBackground>

        <Spacer top={200} bottom={20}>
          <TitleWrapper>
            <Title mBottom="0" size={30} color="#000">
              Gnomelander
            </Title>
            <TouchableOpacity>
              <Icon color="#000" size={30} name="ios-heart-outline" />
            </TouchableOpacity>
          </TitleWrapper>
        </Spacer>

        <FlatListWrapper>
          <FlatList
            data={IMAGES}
            renderItem={({ item }) => {
              return <ScrollImage source={item.img} />;
            }}
            keyExtractor={(item) => item.idx}
            horizontal
          />
        </FlatListWrapper>

        <Spacer top={40} bottom={20}>
          <Nav>
            <Title
              under
              center
              color="#000"
              size={25}
              style={{
                borderBottomWidth: 5,
                borderBottomColor: "black",
              }}
            >
              Overview
            </Title>
            <Title center color="#000" size={25}>
              Reviews
            </Title>
            <Title center color="#000" size={25}>
              About
            </Title>
          </Nav>
        </Spacer>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Spacer right={10}>
            <Button2>
              <Caption center size={15}>
                <FeatherIcon color="#fff" size={20} name="phone" />
              </Caption>
            </Button2>
          </Spacer>
          <Caption size={15} center color="#000">
            {" "}
            555-444-666
          </Caption>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Spacer top={10} right={10}>
            <Button2>
              <Caption center size={15}>
                <Icon color="#fff" size={20} name="location-outline" />
              </Caption>
            </Button2>
          </Spacer>
          <Caption size={15} center color="#000">
            14, Aina Street, Ebute Meta, Lagos
          </Caption>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Spacer top={10} right={10}>
            <Button2>
              <Caption center size={15}>
                <FeatherIcon color="#fff" size={20} name="clock" />
              </Caption>
            </Button2>
          </Spacer>
          <Caption size={15} center color="#000">
            {" "}
            Closes by 6PM
          </Caption>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Spacer top={10} right={10}>
            <Button2>
              <Caption center size={15}>
                <MaterialIcon color="#fff" size={20} name="my-location" />
              </Caption>
            </Button2>
          </Spacer>
          <Caption size={15} center color="#000">
            {" "}
            0.3KM / ETA: 5 Mins
          </Caption>
        </View>
        <Spacer top={20}>
          <BookButton onPress={() => navigation.navigate("Confirm")}>
            <Title mBottom="0" color="#fff" size={20}>
              Book
            </Title>
            <FontIcon color="#fff" size={20} name="edit" />
          </BookButton>
        </Spacer>
      </Container>
    </SafeArea>
  );
};
