import React from 'react';
import {TodoCounter} from '../TodoCounter'
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI ({
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo
}){
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
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
        ))}

      </TodoList>

      <CreateTodoButton /> 
    </React.Fragment>
  )
}

export { AppUI };