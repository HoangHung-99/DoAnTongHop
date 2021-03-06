import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../components/screen/Home";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    headerMode: "none",
  }
);

export default createAppContainer(AppNavigator);
