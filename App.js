import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
//import GalioApp from "./routes";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/login";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MapView from "./app/screens/MapView";
import GamePage from "./app/screens/GamePage";
import Login from "./app/screens/Login2";
import CommunityPage from "./app/screens/Community";
import SearchPage from "./app/screens/Search";
import { GameContext } from "./app/screens/gameContext";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  var testData = {};

  var friendData = {
    friends: [
      { username: "joel", uuid: 123 },
      { username: "test", uuid: 134 },
    ],
    requestsFrom: [{ username: "user2", uuid: 234 }],
    requestsTo: [{ username: "diplomacy", uuid: 345 }],
  };

  var userData = {
    username: "luke",
    uuid: 1,
    email: "lukegehring99@gmail.com",
  };

  //console.log("GameData: " + gameData);

  return (
    <ImageBackground
      source={require("./app/assets/europe_night3.jpg")}
      style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
    >
      <NavigationContainer>
        <Stack.Navigator
          headerMode={"screen"}
          cardStyle={{ backgroundColor: "transparent" }}
          gestureEnabled={false}
          options={{
            cardStyle: { backgroundColor: "transparent" },
            gestureEnabled: false,
            animationEnabled: false,
            animationTypeForReplace: "pop",
          }}
          screenOptions={{
            headerStyle: { backgroundColor: "transparent" },
            headerShown: false,
            cardStyle: { backgroundColor: "transparent" },
            gestureEnabled: false,
          }}
          screenProps={{ msg: "Example parent text" }}
        >
          <Stack.Screen
            name="Home"
            component={Login}
            options={{ title: "" }}
            style={{ backgroundColor: "transparent" }}
          />

          <Stack.Screen name="Main" component={ViewImageScreen} />
          <Stack.Screen
            name="GamePage"
            component={GamePage}
            info={"some text"}
          />
          <Stack.Screen name="MapV" component={MapView} />
          <Stack.Screen name="Community" component={CommunityPage} />
          <Stack.Screen name="Search" component={SearchPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
