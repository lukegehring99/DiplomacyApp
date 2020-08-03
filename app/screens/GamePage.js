import React, { Component } from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  Button,
  Text,
  Alert,
  SafeAreaView,
} from "react-native";
import style from "./style";

function GamePage(props) {
  return (
    <SafeAreaView style={styles.loginScreenContainer}>
      <Text style={styles.title}>
        The title and onPress handler are required. It is recommended to set
        accessibilityLabel to help make your app usable by everyone.
      </Text>
      <Button
        style={styles.loginButton}
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
    backgroundColor: "blue",
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
});

export default GamePage;
