import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/login";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MapView from "./app/screens/MapView";
import GamePage from "./app/screens/GamePage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          ({ headerStyle: { backgroundColor: "blue" } }, { headerShown: false })
        }
      >
        <Stack.Screen
          name="Home"
          component={LoginScreen}
          options={{ title: "" }}
        />
        <Stack.Screen name="Main" component={ViewImageScreen} />
        <Stack.Screen name="Games" component={GamePage} />
        <Stack.Screen name="MapV" component={MapView} />
      </Stack.Navigator>
    </NavigationContainer>
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
