import React, { Component, Fragment } from "react";
import _ from "lodash";
import ResourcesContext from "./contexts/resources";

let updated = false;

export default class Child extends Component {
  render() {
    return (
      <ResourcesContext.Consumer
        selector={state => _.get(state, "resources.books.24.attributes.name")}
      >
        {value => {
          console.log("ChildTwo Consumer value:", value);

          setTimeout(() => {
            if (!updated) {
              updated = true;

              value.createBook(24, {
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
      </ResourcesContext.Consumer>
    );
  }
}
