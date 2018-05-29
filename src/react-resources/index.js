import React from "react";
import createStateContext from "react-state-context";
import { createResourceStore } from "standard-resource";

const defaultSelector = state => state;

export default function createResourcesContext(initialState, options) {
  const store = createResourceStore(initialState, options);

  const stateContextActions = {
    // Our only "action" registers a subscription to the resourceStore,
    // which synchronizes the resourceStore with the context value.
    // The action itself is technically an unsubscribe function, although it
    // wouldn't make sense to ever call it.
    unsubscribe: setState => {
      return store.subscribe(() => {
        setState(store.getState());
      });
    }
  };

  const StateContext = createStateContext(
    stateContextActions,
    store.getState()
  );

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
        getResources: store.getResources,
        getGroup: store.getGroup,
        getState: store.getState,
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
    store,
    Provider: StateContext.Provider,
    Consumer: ResourceConsumer
  };
}
