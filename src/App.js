import React, { Component, Fragment } from "react";
import List from "./Components/List/list";
import GlobalStyle from "./global.js";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <List />
      </Fragment>
    );
  }
}
