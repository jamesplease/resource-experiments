import React, { Component, Fragment } from "react";
import "./App.css";
import Todos from "./Todos";
import ChildTwo from "./child-two";
import ChildThree from "./child-three";
import TodosContext from "./contexts/todos";
// import Resources from "./resources/resources";

class App extends Component {
  render() {
    return (
      <TodosContext.Provider>
        {/* <Resources.Provider> */}
        <div className="App">
          <header>
            <h1 className="App-title">
              Welcome to SC Test {this.state.number}
            </h1>
          </header>
          <Todos />

          {/* <ChildTwo />
            <ChildThree /> */}
        </div>
        {/* </Resources.Provider> */}
      </TodosContext.Provider>
    );
  }

  state = {};

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => {
        return {
          // number: prevState.number + 1
        };
      });
    }, 2500);
  }
}

export default App;
