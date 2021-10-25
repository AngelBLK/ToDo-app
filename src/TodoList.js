import React from "react";
import './TodoList.css';

function TodoList(props) {
  return (
    <section className="TodoList__container">
      <ul className="TodoList__menu">
      {props.children}
    </ul>
    </section>
  );
}

export {TodoList};