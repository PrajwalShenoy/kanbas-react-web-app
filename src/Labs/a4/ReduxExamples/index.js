import React from "react";
import HelloRedux from "./HelloRedux";
import CounterReducer from "./CounterRedux/counterReducer";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <TodoList />
      <AddRedux />
      <CounterRedux />
      <HelloRedux />
    </div>
  );
};

export default ReduxExamples