import React, {useContext} from 'react';
import ToDoItem from '../TodoItem';

import ToDoCounter from '../TodoCounter';
import ToDoSearch from '../TodoSearch';
import ToDoList from '../TodoList';

import CreateToDoButton from '../CreateTodoButton';
import TodosLoading from '../TodosLoading';
import {TodoContext} from '../../TodoContext';
import Modal from '../Modal';
import TodoForm from '../TodoForm';

const AppUI: React.FC = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('TodoContext must be used within a TodoProvider');
  }

  const {
    loading,
    error,
    searchedTodos,
    totalTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = context;

  return (
    <>
      <ToDoCounter />
      <ToDoSearch />

      <ToDoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <p>Error cargando...</p>}
        {!loading && totalTodos < 1 && <p>Crea tu primer ToDo!</p>}

        {searchedTodos.map(todo => (
          <ToDoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </ToDoList>

      <CreateToDoButton/>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
};

export default AppUI;
