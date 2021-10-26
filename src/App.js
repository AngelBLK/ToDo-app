// import logo from './logo.svg';
// import './App.css';
import React from "react";
import {TodoCounter} from './TodoCounter'
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  {text: "JS Practice", completed: true},
  {text: "Drink Water", completed: false},
  {text: "Study react", completed: true},
  {text: "Test", completed: false},
];

function App(props) {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  //El doble signo de ! niega, un segundo signo, niega la validacion y regresa un true
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    })
    
  }


  return (
    <React.Fragment>
      <TodoCounter 
        completed={completedTodos}
        total={totalTodos}
      />
      
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      <TodoList>
        {/* //Podemos retornar de la manera tradicion () =>{retunr (componente)} para renderizar un componente o hacerlo de forma automatica con parentesis () => (componente) */ }
        {searchedTodos.map(todo => ( 
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
