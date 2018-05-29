import createStateContext from "react-state-context";

const todoActions = {
  createTodo: (setState, getState) => newTodo => {
    const clonedTodos = [...getState().todos];

    setState({
      todos: clonedTodos.push(newTodo)
    });

    return newTodo;
  },

  deleteTodo: setState => id => {
    // Implement some logic to delete the todo.
  },

  increment: () => setState => {
    console.log("increment part 1");
    setState(prevState => {
      return {
        number: prevState.number + 1
      };
    });

    console.log("starting to wait for part 2");
    setTimeout(() => {
      setState(prevState => {
        console.log("increment part 2");
        return {
          number: prevState.number + 1
        };
      });
    }, 1000);
  },

  decrement: () => setState => {
    setState(prevState => {
      return {
        number: prevState.number - 1
      };
    });
  },

  setNumber: number => {
    return {
      number
    };
  },

  setNull() {
    return null;
  }
};

export default createStateContext(todoActions, {
  todos: [],
  number: 0
});
