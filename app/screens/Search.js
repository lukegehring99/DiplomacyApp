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

function SearchPage(props) {
  const { navigation } = props;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Block
        row
        right={true}
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
        }}
      >
        <Button
          color={"transparent"}
          shadowless={true}
          style={styles.navmenu}
          onPress={() => {
            navigation.replace("GamePage");
          }}
        >
          <Block>
            <FontAwesomeIcon icon={faGlobe} size={64} color={"white"} />
          </Block>
        </Button>
      </Block>
      <ScrollView style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>
        <Text style={{ color: "white" }}>
          There will be results displayed here
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navmenu: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center",
  },
});

export default SearchPage;
