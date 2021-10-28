// import logo from './logo.svg';
// import './App.css';
import React from "react";
import {AppUI} from './AppUI';

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

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    // Dos formas de cambiar el estado de nuestros toDos
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,

    // };
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,

    // };
  }

  return (
    <AppUI 
      completed={completedTodos}
      total={totalTodos}

      searchValue={searchValue}
      setSearchValue={setSearchValue}

      searchedTodos={searchedTodos}

      completeTodo={completeTodo}
      deleteTodo={deleteTodo}

    />
  );
}

export default App;
