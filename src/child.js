import React, { Component, Fragment } from "react";
import TodosContext from "./contexts/todos";

export default class Child extends Component {
  render() {
    return (
      <TodosContext.Consumer>
        {value => {
          return (
            <Fragment>
              <div>hello {value.state.number}</div>
              <button onClick={() => value.increment()}>Increment</button>
              <button onClick={() => value.decrement()}>Decrement</button>
            </Fragment>
          );
        }}
      </TodosContext.Consumer>
    );
  }
}
