import React from "react";
import createStateContext from "react-state-context";
import { createResourceStore } from "standard-resource";

const defaultSelector = state => state;

export default function createResourcesContext(actions = {}, initialState) {
  const store = createResourceStore();

  const stateContextActions = {
    // Our only "action" registers a subscription to the resourceStore,
    // which synchronizes the resourceStore with the context value.
    // The action itself is technically an unsubscribe function, although it
    // wouldn't make sense to ever call it.
    unsubscribe: (setState, getState) => {
      return store.subscribe(() => {
        setState(store.getState());
      });
    }
  };

  const StateContext = createStateContext(
    stateContextActions,
    store.getState()
  );

  const storeWriteApi = {
    update: store.update,
    remove: store.remove
  };

  const storeReadApi = {
    getResources: store.getResources,
    getGroup: store.getGroup,
    getState: store.getState
  };

  const actionArgument = {
    ...storeWriteApi,
    ...storeReadApi
  };

  const boundActions = {};
  for (let key in actions) {
    const action = actions[key];

    if (typeof action !== "function") {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          `An action with key ${key} was passed to createStateContext that was not a function. Actions` +
            ` must be functions. The ${key} action has been ignored. You should check your call to createStateContext().`
        );
      }

      continue;
    }

    // Should these be wrapped in a setTimeout so as to avoid the issue of calling setState in render?
    boundActions[key] = action(actionArgument);
  }

  class ShouldConsumerUpdate extends React.Component {
    shouldComponentUpdate({ state }) {
      if (Array.isArray(state)) {
        const currentState = this.props.state;
        return state.some(
          (observedState, i) => observedState !== currentState[i]
        );
      }

      return this.props.state !== state;
    }

    render() {
      const { children, state } = this.props;

      return children({
        ...boundActions,
        ...storeReadApi,
        state
      });
    }
  }

  function ResourceConsumer({ children, selector }) {
    const selectorToUse = selector ? selector : defaultSelector;

    return (
      <StateContext.Consumer>
        {({ state }) => {
          const observedState = selectorToUse(state);

          return (
            <ShouldConsumerUpdate state={observedState}>
              {children}
            </ShouldConsumerUpdate>
          );
        }}
      </StateContext.Consumer>
    );
  }

  return {
    Provider: StateContext.Provider,
    Consumer: ResourceConsumer
  };
}
