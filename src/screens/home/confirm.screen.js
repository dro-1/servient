import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Dimensions, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontIcon from "react-native-vector-icons/FontAwesome";

import { SafeArea } from "../../components/safe-area.component";
import { Container, Title, Caption } from "../screens.styles";
import { Spacer } from "../../components/spacer.component";

const Image = styled.Image`
  width: 50px;
  height: 50px;
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

const TimeWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Button3 = styled.TouchableOpacity`
  background-color: #000;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 15px;
  width: 100px;
`;

const BookButton = styled.TouchableOpacity`
  background-color: #000;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 15px;
  width: 100px;
  width: 100%;
`;

const User = styled.View`
  flex-direction: row;
  width: 160px;
  justify-content: space-between;
  align-items: center;
`;

const UserWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DetailsWrapper = styled.View`
  padding: 30px 20px;
  border: solid 1px black;
  border-right-width: 0;
  border-left-width: 0;
`;

const Detail = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ConfirmWrapper = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const ConfirmScreen = ({ navigation }) => {
  return (
    <SafeArea color="#fff">
      <Container>
        <ImageBackground
          width={100}
          height={200}
          source={require("./../../../assets/images/map-2.png")}
          wRelative
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image source={require("./../../../assets/images/cancel.png")} />
          </TouchableOpacity>
        </ImageBackground>

        <Spacer top={200} bottom={20}>
          <TimeWrapper
            style={{
              borderBottomColor: "#d4d4d4",
              borderBottomWidth: 1,
              paddingBottom: 15,
            }}
          >
            <View>
              <Title mBottom="0" color="#000" size={20}>
                00:10:23
              </Title>
              <Caption color="#000" size={15}>
                Appointment Time
              </Caption>
            </View>
            <Button3>
              <Icon color="#fff" size={20} name="enter-outline" />
              <Spacer left={5}>
                <Title mBottom="0" color="#fff" size={20}>
                  Start
                </Title>
              </Spacer>
            </Button3>
          </TimeWrapper>
        </Spacer>

        <UserWrapper
          style={{
            borderBottomColor: "#d4d4d4",
            borderBottomWidth: 1,
            paddingBottom: 15,
          }}
        >
          <User center>
            <Image source={require("./../../../assets/images/user.png")} />
            <Title mBottom="0" color="#000" size={20} center>
              Seun Taiwo
            </Title>
          </User>
          <Button3>
            <FeatherIcon color="#fff" size={20} name="phone" />
          </Button3>
        </UserWrapper>

        <DetailsWrapper>
          <Detail>
            <Title mBottom="0" color="#000" size={20}>
              Appointment
            </Title>
            <Caption color="#000" size={15}>
              Corporate Shirts
            </Caption>
          </Detail>
          <Detail>
            <Title mBottom="0" color="#000" size={20}>
              Time Booked
            </Title>
            <Caption color="#000" size={15}>
              12:30
            </Caption>
          </Detail>
          <Detail>
            <Title mBottom="0" color="#000" size={20}>
              Date
            </Title>
            <Caption color="#000" size={15}>
              July 27, 2021
            </Caption>
          </Detail>
        </DetailsWrapper>

        <ConfirmWrapper>
          <Image source={require("./../../../assets/images/car.png")} />
          <Spacer top={10} bottom={20}>
            <Title color="#000" size={20} center>
              {" "}
              Confirm Appointment{" "}
            </Title>
          </Spacer>
          <BookButton onPress={() => navigation.navigate("Session")}>
            <Title mBottom="0" color="#fff" size={20} center>
              Confirm
            </Title>
          </BookButton>
        </ConfirmWrapper>
      </Container>
    </SafeArea>
  );
};
