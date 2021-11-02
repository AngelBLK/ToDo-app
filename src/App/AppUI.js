import React from 'react';
import {TodoCounter} from '../TodoCounter'
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import {TodoContext} from '../todoContext/index';
import {Modal} from '../Modal/index';
import {TodoForm} from '../TodoForm/TodoForm'


function AppUI (){

  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    
    <React.Fragment>
      <TodoCounter />    
      <TodoSearch/>
      
      <TodoList>
        {error && <p>Panic!</p>}
        {loading && <p>Loading, wait a minute</p>}
        {!loading && !searchedTodos.length && <p>Create your First ToDo</p>}
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
      
      {openModal && (
        <Modal>
          <TodoForm/> 
        </Modal> 
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      /> 
    </React.Fragment>
  )
}

export { AppUI };