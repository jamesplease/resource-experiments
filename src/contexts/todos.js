import createStateContext from "react-state-context";

const todoActions = {
  createTodo: (setState, getState) => newTodo => {
    const clonedTodos = [...getState().todos];

    setState({
      todos: clonedTodos.push(newTodo)
    });

    return newTodo;
  },

  deleteTodo: (setState, getState) => id => {
    // Implement some logic to delete the todo.
  },

  increment: (setState, getState) => () => {
    setState({
      number: ++getState().number
    });
  },

  decrement: (setState, getState) => {
    return () => {
      setState({
        number: --getState().number
      });
    };
  }
};

export default createStateContext(todoActions, {
  todos: [],
  number: 0
});
