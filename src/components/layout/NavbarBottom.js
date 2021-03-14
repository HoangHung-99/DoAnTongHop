import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { navBarData } from './Data/NavBarData'

export class NavbarBottom extends React.Component {

  navList = () => {
    return navBarData.map((item, index) => {
      return (
        <View style={styles.navList} key={item.key}>
          <Text>
            {item.navIcons}
          </Text>
        </View>
      );
    });
  };

  render() {
    return <View style={styles.navBar}>{this.navList()}</View>;
  }
}

const styles = StyleSheet.create({
  navBar: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // flex: "1",
    bottom: "0",
    zIndex: "1",

    width: "100%",
    height: "70px",

    borderRadius: "10px",

    backgroundColor: "red",
  },

  navList: {
    justifyContent: "space-between",
    // flex: "1",
    // padding: "10px"
  }
})

export default NavbarBottom;

// import React, { Component } from 'react'
// import { View, Text } from 'react-native'
// import moduleName from 'react-navigation/bottom-tabs'

// export class NavbarBottom extends Component {
//   render() {
//     return (
//       <View>
        
//       </View>
//     )
//   }
// }

// export default NavbarBottom

