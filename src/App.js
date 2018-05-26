import React, { Component } from "react";
import "./App.css";
import Child from "./child";
import ChildTwo from "./child-two";
import TodosContext from "./contexts/todos";
import ResourcesContext from "./contexts/resources";

class App extends Component {
  render() {
    return (
      <TodosContext.Provider>
        <ResourcesContext.Provider>
          <div className="App">
            <header>
              <h1 className="App-title">Welcome to SC Test</h1>
            </header>
            <Child />
            <ChildTwo />
          </div>
        </ResourcesContext.Provider>
      </TodosContext.Provider>
    );
  }
}

export default App;
