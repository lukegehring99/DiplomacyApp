import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Card, Button } from "react-native-elements";
import { MapView } from "expo";
import { connect } from "react-redux";

const window = Dimensions.get("window");

class PolygonPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      polygon: [
        {
          latitude: this.props.points.data.routeGeoJSON.features[0].geometry
            .coordinates[0][0][1],
          longitude: this.props.points.data.routeGeoJSON.features[0].geometry
            .coordinates[0][0][0],
        },
        {
          latitude: this.props.points.data.routeGeoJSON.features[0].geometry
            .coordinates[0][1][1],
          longitude: this.props.points.data.routeGeoJSON.features[0].geometry
            .coordinates[0][1][0],
        },
        {
          latitude: this.props.points.data.routeGeoJSON.features[0].geometry
            .coordinates[0][2][1],
          longitude: this.props.points.data.routeGeoJSON.features[0].geometry
            .coordinates[0][2][0],
        },
        {
          latitude: this.props.points.data.routeGeoJSON.features[0].geometry
            .coordinates[0][3][1],
          longitude: this.props.points.data.routeGeoJSON.features[0].geometry
            .coordinates[0][3][0],
        },
      ],
    };
  }

  onButtonPressClose = () => {
    this.props.navigation.navigate("Home");
  };

  render() {
    const { polygon } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          zoomEnabled
          initialRegion={{
            latitude: this.props.points.data.routeGeoJSON.features[0].geometry
              .coordinates[0][0][1],
            longitude: this.props.points.data.routeGeoJSON.features[0].geometry
              .coordinates[0][0][0],
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapView.Polygon
            coordinates={polygon}
            fillColor="rgba(0, 200, 0, 0.5)"
            strokeColor="rgba(0,0,0,0.5)"
            strokeWidth={2}
          />
        </MapView>
        <View style={stylesContainer.topContainer}>
          <Card title="Route Information">
            <View>
              <Text>Name: {this.props.points.data.name}</Text>
              <Text>Description: {this.props.routes.data.description}</Text>
            </View>
          </Card>
        </View>
        <View style={stylesContainer.buttonBottomContainer}>
          <Button
            medium
            title="Back"
            backgroundColor="#94b8b8"
            onPress={this.onButtonPressClose}
          />
        </View>
      </View>
    );
  }
}

PolygonPage.propTypes = {
  provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    flex: 1,
    height: window.height,
    width: window.width,
  },
});

function mapStateToProps({ points }) {
  return { points };
}

export default connect(mapStateToProps)(PolygonPage);
