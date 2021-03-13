import React, { Component } from "react";
import { View, Text, StyleSheet} from "react-native";

import * as FaIcons from "react-icons/fa";

export class NavbarBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NavBarData: [
        {
          navIcons: <FaIcons.FaHome />,
          name: "Home",
        },
        {
          navIcons: <FaIcons.FaHeart />,
        },
        {
          navIcons: <FaIcons.FaUser />,
        },
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.NavBarData.map((item, index) => {
          <Text style={styles.iconNavBars}>{item.navIcons}{item.name}</Text>;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  iconNavBars: {
    color: "#000",
  },
});

export default NavbarBottom;
