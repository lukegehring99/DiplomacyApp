import React, { Component } from "react";

import styles from "./style";
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "react-native-elements";

const appId = "1047121222092614";

const LoginScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Frat Chat</Text>
            <TextInput
              autoCompleteType="tel"
              autoCorrect={false}
              placeholder="Phone Number"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              keyboardType="number-pad"
            />
            <TextInput
              placeholder="Password"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => onLoginPress(navigation)}
              title="Login this"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

function componentDidMount() {}

function componentWillUnmount() {}

function onLoginPress(navigation) {
  navigation.navigate("Main", {});
}

async function onFbLoginPress() {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
    appId,
    {
      permissions: ["public_profile", "email"],
    }
  );
  if (type === "success") {
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`
    );
    Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
  }
}

export default LoginScreen;
