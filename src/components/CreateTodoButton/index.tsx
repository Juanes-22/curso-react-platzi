import {useContext} from 'react';
import {TodoContext} from '../../TodoContext';
import './styles.css';

const CreateToDoButton: React.FC = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('TodoContext must be used within a TodoProvider');
  }

  const {setOpenModal} = context;

  return (
    <button
      type="button"
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal(prevState => !prevState);
      }}>
      +
    </button>
  );
};

export default CreateToDoButton;
