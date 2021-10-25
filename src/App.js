// import logo from './logo.svg';
// import './App.css';
import React from "react";
import {TodoCounter} from './TodoCounter'
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  {text: "Practicar JS", completed: true},
  {text: "Tomar Agua", completed: false},
  {text: "Aprender React", completed: false},
  {text: "Ver nuevos cursos de complemento", completed: false},
]

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />
      
      <TodoSearch />
      
      <TodoList>
        {/* //Podemos retunrar de la manera tradicion () =>{retunr (componente)} para renderizar un componente o hacerlo de forma automatica con parentesis () => (componente) */ }
        {todos.map(todo => ( 
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            />
        ))}

      </TodoList>

      <CreateTodoButton /> 
    </React.Fragment>
  );
}

export default App;
