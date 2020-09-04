import React, { Component } from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  Alert,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Header } from "react-native-elements";
import { Block, Button, Input, NavBar, Text } from "galio-framework";
import theme from "../theme";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUserFriends,
  faSearch,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import style from "./style";

const gameData = {
  games: [
    {
      gameId: 1,
      name: "God mode",
      info: {
        state: "active",
        turn: "",
        year: "1900",
        season: "F",
      },
      users: {
        current: [
          { username: "luke", uuid: 1 },
          { username: "joel", uuid: 123 },
        ],
      },
    },
    {
      gameId: 2,
      name: "PlayDiplomacy Sucks",
      info: {
        state: "active",
        turn: "build",
        year: "1901",
        season: "S",
      },
      users: {
        current: [
          { username: "luke", uuid: 1 },
          { username: "joel", uuid: 123 },
        ],
      },
    },
    {
      gameId: 2,
      name: "New Test Game",
      info: {
        state: "active",
        turn: "retreat",
        year: "1908",
        season: "F",
      },
      users: {
        current: [
          { username: "luke", uuid: 1 },
          { username: "joel", uuid: 123 },
        ],
      },
    },
  ],
};

function GamePage(props) {
  const { navigation } = props;
  //const { games } = props;
  //const { msg } = props.screenProps;

  //onsole.log("Game data: " + games);
  console.log(props);
  return (
    <SafeAreaView style={styles.loginScreenContainer}>
      <Block
        row
        space="between"
        style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}
      >
        <SocialButton navigation={navigation} />
        <Block>
          <FontAwesomeIcon icon={faGlobe} size={64} color={"white"} />
        </Block>
        <SearchButton navigation={navigation} />
      </Block>

      <GetGames games={gameData} navigation={navigation} />
    </SafeAreaView>
  );
}

function SocialButton(props) {
  const { navigation } = props;

  return (
    <Button
      color={theme.COLORS.WHITE}
      style={styles.navmenu}
      onPress={() => {
        navigation.replace("Community");
      }}
    >
      <FontAwesomeIcon
        icon={faUserFriends}
        size={32}
        color={theme.COLORS.INFO}
      />
    </Button>
  );
}

function SearchButton(props) {
  const { navigation } = props;
  return (
    <Button
      color={theme.COLORS.WHITE}
      style={styles.navmenu}
      onPress={() => {
        navigation.replace("Search");
      }}
    >
      <FontAwesomeIcon icon={faSearch} size={32} color={theme.COLORS.INFO} />
    </Button>
  );
}

function GetGames(props) {
  const { navigation } = props;
  const { games } = props.games;
  console.log("Games: " + games);
  //console.log("Games[0]: " + games.games);

  var gameList = (
    <ScrollView
      style={{
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "column",
      }}
    >
      <GameButton gameInfo={games[0]} navigation={navigation} />
      <GameButton gameInfo={games[1]} navigation={navigation} />
      <GameButton gameInfo={games[2]} navigation={navigation} />
    </ScrollView>
  );

  return gameList;
}

function GameButton(props) {
  const { navigation } = props;
  const { gameInfo } = props;

  console.log("Button: " + gameInfo);

  return (
    <Button
      color="white"
      style={{
        //flexDirection: "column",
        //flex: 1,
        width: "95%",
        height: 120,
        borderRadius: 25,
      }}
      onPress={() => {
        //navigation.replace("Community");
        //gameInfo.name = "Clicked!";
        //console.log("Name: " + gameInfo.name);
        navigation.navigate("MapV");
      }}
    >
      <Block
        row={true}
        space="between"
        flex={1}
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
          width: "92%",
        }}
      >
        <Image
          source={require("../assets/map11.png")}
          style={{
            //flex: 1,
            width: 100,
            height: 100,
            //scale=0.2,
            resizeMode: "cover",
            borderRadius: 10,
          }}
        />
        <Block style={{ alignItems: "flex-end" }}>
          <Text>{gameInfo.name}</Text>
          <Text>
            {MapSeason(gameInfo.info.season) + " " + gameInfo.info.year}
          </Text>
          <Text>{"Submit orders: " + gameInfo.info.turn}</Text>
        </Block>
      </Block>
    </Button>
  );
}

function MapSeason(season) {
  if (season == "S") {
    return "Spring";
  } else if (season == "F") {
    return "Fall";
  } else {
    return "";
  }
}

function GetGameInfo(props) {
  return null;
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: "center",
  },
  loginFormView: {
    alignItems: "center",
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
    width: "75%",
  },
  loginButton: {
    backgroundColor: "red",
    borderRadius: 5,
    height: 45,
    marginTop: 20,
    width: "100%",
    color: "blue",
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
  },
  title: { fontSize: 20 },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    //backgroundColor: theme.COLORS.GREY,
  },
  navmenu: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center",
  },
});

export default GamePage;
