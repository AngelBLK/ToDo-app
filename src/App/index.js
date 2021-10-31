// import logo from './logo.svg';
// import './App.css';
import React from "react";
import {AppUI} from './AppUI';

// const defaultTodos = [
//   {text: "JS Practice", completed: true},
//   {text: "Drink Water", completed: false},
//   {text: "Study react", completed: true},
//   {text: "Test", completed: false},
// ];

const useLocalStorage = (itemName, initialValue) => {

  

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  }

  return [
    item, 
    saveItem
  ];
}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  
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
    
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
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
