import {useContext} from 'react';
import './styles.css'
import {TodoContext} from '../../TodoContext';

function ToDoSearch() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('TodoContext must be used within a TodoProvider');
  }

  const {setSearchValue} = context;

  return (
    <input
      className="TodoSearch"
      type="text"
      placeholder="Go to the gym"
      onChange={e => {
        setSearchValue(e.target.value);
      }}
    />
  );
}

export default ToDoSearch;
