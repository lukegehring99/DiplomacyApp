import React from "react";
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  ImageBackground,
} from "react-native";

// galio component
import { Block, Button, Input, NavBar, Text } from "galio-framework";
import theme from "../theme";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCoffee,
  faCheckSquare,
  faGlobe,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faCheckSquare, faCoffee);

const { height, width } = Dimensions.get("window");

class Login extends React.Component {
  state = {
    email: "-",
    password: "-",
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;

    return (
      <Block safe flex>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="height"
          enabled
        >
          <Block
            flex
            center
            space="evenly"
            style={{ marginTop: theme.SIZES.BASE * 1.875 }}
          >
            <Block>
              <FontAwesomeIcon icon={faGlobe} size={64} color={"white"} />
            </Block>
            <Block style={{ marginTop: theme.SIZES.BASE }}>
              <Input
                rounded
                type="email-address"
                placeholder="Email"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={(text) => this.handleChange("email", text)}
              />
              <Input
                rounded
                password
                viewPass
                placeholder="Password"
                style={{ width: width * 0.9 }}
                onChangeText={(text) => this.handleChange("password", text)}
              />
              <Text
                color={theme.COLORS.ERROR}
                size={theme.SIZES.FONT * 0.75}
                onPress={() => Alert.alert("Not implemented")}
                style={{
                  alignSelf: "flex-end",
                  lineHeight: theme.SIZES.FONT * 2,
                }}
              >
                Forgot your password?
              </Text>
            </Block>

            <Block
              row
              space="between"
              style={{ marginVertical: theme.SIZES.BASE * 1.875 }}
            >
              <Block flex middle right>
                <Button
                  round
                  //onlyIcon
                  //iconSize={theme.SIZES.BASE * 1.625}
                  //icon="dialpad"
                  iconFamily="FontAwesome"
                  color={theme.COLORS.FACEBOOK}
                  shadowColor={theme.COLORS.FACEBOOK}
                  //iconColor={theme.COLORS.WHITE}
                  style={styles.social}
                  onPress={() => Alert.alert("Not implemented")}
                >
                  <FontAwesomeIcon
                    icon={["fab", "facebook-f"]}
                    size={32}
                    color={"white"}
                  />
                </Button>
              </Block>
              <Block flex middle center>
                <Button
                  round
                  //onlyIcon
                  //iconSize={theme.SIZES.BASE * 1.625}
                  //icon="twitter"
                  //iconFamily="FontAwesome"
                  color={theme.COLORS.TWITTER}
                  shadowColor={theme.COLORS.TWITTER}
                  iconColor={theme.COLORS.WHITE}
                  style={styles.social}
                  onPress={() => Alert.alert("Not implemented")}
                >
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    size={32}
                    color={"white"}
                  />
                </Button>
              </Block>
              <Block flex middle left>
                <Button
                  round
                  //onlyIcon
                  //iconSize={theme.SIZES.BASE * 1.625}
                  //icon="dribbble"
                  //iconFamily="FontAwesome"
                  color={theme.COLORS.DRIBBBLE}
                  shadowColor={theme.COLORS.DRIBBBLE}
                  //iconColor={theme.COLORS.WHITE}
                  style={styles.social}
                  onPress={() => Alert.alert("Not implemented")}
                >
                  <FontAwesomeIcon
                    icon={["fab", "google"]}
                    size={32}
                    color={"white"}
                  />
                </Button>
              </Block>
            </Block>
          </Block>
        </KeyboardAvoidingView>
        <Block flex middle style={{ marginBottom: theme.SIZES.BASE * 1.875 }}>
          <Button
            round
            color="red"
            style={{ backgroundColor: "white" }}
            onPress={() => {
              /*Alert.alert(
                  "Sign in action",
                  `Email: ${email} Password: ${password}`
                );*/
              //navigation.navigate("GamePage");
              navigation.replace("GamePage");
            }}
          >
            <Text color={theme.COLORS.INFO}>Sign in</Text>
          </Button>
          <Button
            color="transparent"
            shadowless
            onPress={() => navigation.navigate("Register")}
          >
            <Text
              center
              color={theme.COLORS.ERROR}
              size={theme.SIZES.FONT * 0.75}
            >
              {"Don't have an account? Sign Up"}
            </Text>
          </Button>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    //backgroundColor: theme.COLORS.GREY,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center",
  },
});

export default Login;
