import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";
import SingleTodo from "./SingleTodo";

export default function Todos() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  //   console.log(state, dispatch);
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodo("");
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="title-input"
            type="text"
            name="newTodo"
            value={newTodo}
            onChange={handleChanges}
          />
          <button>Add Todo</button>
        </form>
      </div>
      <div>
        <h1>TODO list</h1>
        {state.map(item => (
          <SingleTodo
            todo={item.todo}
            key={item.id}
            completed={item.completed}
            id={item.id}
            dispatch={dispatch}
          />
        ))}
      </div>
      <button
        onClick={() => {
          dispatch({ type: "CLEAR_COMPLETED" });
        }}
      >
        CLEAR COMPLETED!
      </button>
    </div>
  );
}
