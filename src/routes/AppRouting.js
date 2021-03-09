import React from "react";
import { NativeRouter, Link, Route, Router } from "react-router-native";

import Home from '../components/Home'


export default class AppRouting extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Route exact path="/" component={Home}/>
      </NativeRouter>
    );
  }
}
