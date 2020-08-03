import React, { Component } from "react";
import { Image, Dimensions, Modal, View, StyleSheet, Text } from "react-native";
//import ImageZoom from "react-native-image-pan-zoom";
//import ImageViewer from "react-native-image-zoom-viewer";
import MapView, { Polygon, Overlay } from "react-native-maps";

function Map(props) {
  //print("rendered");
  return (
    /*
    <Modal visible={true} transparent={true}>
      <ImageViewer imageUrls={images} />
    </Modal> */

    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        mapType={"satellite"}
        minZoomLevel={3.25}
        maxZoomLevel={5}
        rotateEnabled={false}
        pitchEnabled={false}
        provider={"google"}
        showsCompass={true}
      >
        <Overlay
          image="https://1000logos.net/wp-content/uploads/2017/06/Twitter-Logo.png"
          bounds={[
            [58.322752, 3.876509],
            [57.038367, 6.188094],
          ]}
          opacity={1}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

const images = [
  {
    // Simplest usage.
    url: "../assets/logo-red.png",

    // width: number
    // height: number
    // Optional, if you know the image size, you can set the optimization performance

    // You can pass props to <Image />.
    props: {
      // headers: ...
    },
  },
  {
    url: "",
    props: {
      // Or you can set source directory.
      source: require("../assets/logo-red.png"),
    },
  },
];

export default Map;
