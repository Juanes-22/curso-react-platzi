import React, {useState} from 'react';
import './styles.css';
import {TodoContext} from '../../TodoContext';

interface TodoFormProps {}

const TodoForm: React.FC<TodoFormProps> = ({}) => {
  const {addTodo, setOpenModal} = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = event => {
    setOpenModal(false);
  };

  const onChange = event => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Cortar cebolla para el almuerzo"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add ">
          Añadir
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
