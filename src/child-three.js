import React, { Component, Fragment } from "react";
import Resources from "./resources/resources";
import { createAuthor } from "./resources/actions";

let updated = false;

export default class Child extends Component {
  render() {
    return (
      <Resources.Consumer selector={state => state.resources.authors}>
        {value => {
          console.log("ChildThree Consumer value:", value);

          setTimeout(() => {
            if (!updated) {
              updated = true;

              createAuthor(24, {
                name: "James"
              });
            }
          });

          return (
            <Fragment>
              <div>Resources thing</div>
            </Fragment>
          );
        }}
      </Resources.Consumer>
    );
  }
}
