import {useContext} from 'react';
import './styles.css'

import {TodoContext} from '../../TodoContext';

function ToDoCounter() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('TodoContext must be used within a TodoProvider');
  }

  const {completedTodos, totalTodos} = context;

  return (
    <h2>
      You completed {completedTodos} of {totalTodos} tasks
    </h2>
  );
}

export default ToDoCounter;
