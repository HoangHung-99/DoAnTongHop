import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./src/components/screen/SplashScreen";

import AppRouting from "./src/routes/AppRouting";

export default class App extends React.Component {
  //state khai báo biến trạng thái loading của app
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  //Giả lập thời gian load server thử chạy splash screen
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve("result");
      }, 2000)
    );
  };

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  //Giả lập thời gian load server thử chạy splash screen
  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }

    return <AppRouting />;
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
