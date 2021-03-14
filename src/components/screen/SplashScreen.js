import React, { Component } from "react";
import { Text, View } from "react-native";

import splash from '../../styles/splash'

export class SplashScreen extends Component {
  render() {
    const viewStyles = [splash.container, { backgroundColor: "orange" }];
    const textStyles = {
      color: "white",
      fontSize: 40,
      fontWeight: "bold",
    };

    return (
      <View style={viewStyles}>
        <Text style={textStyles}>Splash Screen</Text>
      </View>
    );
  }
}

export default SplashScreen;
