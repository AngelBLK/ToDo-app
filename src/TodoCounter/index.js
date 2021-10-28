import React from "react";
import './TodoCounter.css';

function TodoCounter({completed, total}) {
  return (
    <h2 className="TodoCounter">You have completed {completed} of {total} ToDos</h2>
  );
}


export {TodoCounter};
