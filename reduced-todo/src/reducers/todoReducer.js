export const initialState = [
  {
    todo: "learn redux",
    completed: false,
    id: 12345678
  },
  {
    todo: "git gud",
    completed: false,
    id: 23456789
  }
];

export const todoReducer = (state, action) => {
  console.log("reducer action", action);
  console.log("reducer state", state);
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { todo: action.payload, completed: false, id: Date.now() }
      ];
    case "TOGGLE_COMPLETED":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    // case "TOGGLE_COMPLETED":
    //   return state.map(todo => {
    //     if (todo.id === action.payload) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed
    //       };
    //     } else return todo;
    //   });
    case "CLEAR_COMPLETED":
      return state.filter(todo => todo.completed === false);
    default:
      return state;
  }
};
