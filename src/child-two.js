import React, { Component, Fragment } from "react";
import _ from "lodash";
import Resources from "./resources/resources";
import { createBook } from "./resources/actions";

let updated = false;

export default class Child extends Component {
  render() {
    return (
      <Resources.Consumer
        selector={state => _.get(state, "resources.books.24.attributes.name")}
      >
        {value => {
          console.log("ChildTwo Consumer value:", value);

          setTimeout(() => {
            if (!updated) {
              updated = true;

              createBook(24, {
                name: "Lord of the Rings"
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
