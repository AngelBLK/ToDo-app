import React from 'react';
import { TodoContext } from '../todoContext';

const TodoForm = () => {

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {addTodo, setOpenModal} = React.useContext(TodoContext)
  
  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  const onAdd = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }
  return (
    <form onSubmit={onAdd}>
      <label>Create ToDo</label>
      <textarea 
        value={newTodoValue}
        onChange={onChange}
        placeholder="Type here your toDo"
      />

      <div>
        <button 
        type="button"
          onClick={onCancel}
        >Cancel</button>
        <button 
        type="submit"
        >Add</button>
      </div>
    </form>
  );
}

export {TodoForm};