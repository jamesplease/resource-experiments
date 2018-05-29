import React, { Component, Fragment } from "react";
import TodosContext from "./contexts/todos";

export default class Child extends Component {
  render() {
    return (
      <TodosContext.Consumer>
        {value => {
          console.log("Child: rendering", value.state);
          return (
            <Fragment>
              <div>hello {value.state && value.state.number}</div>
              <button onClick={() => value.increment()}>Increment</button>
              <button onClick={() => value.decrement()}>Decrement</button>
              <button onClick={() => value.setNumber(10)}>Set to 10</button>
            </Fragment>
          );
        }}
      </TodosContext.Consumer>
    );
  }
}
