import React from "react";
import './TodoCounter.css';
import {TodoContext} from '../todoContext/index';

function TodoCounter() {
  const {totalTodos, completedTodos} = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">You have completed {completedTodos} of {totalTodos} ToDos</h2>
  );
}


export {TodoCounter};
