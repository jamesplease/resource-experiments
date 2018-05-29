import React, { Component } from "react";
import "./App.css";
import Child from "./child";
import ChildTwo from "./child-two";
import ChildThree from "./child-three";
// import Resources from "./resources/resources";

class App extends Component {
  render() {
    return <Child />;
  }

  shouldComponentUpdate = () => {
    return false;
  };
}

export default App;
