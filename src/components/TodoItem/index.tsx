import './styles.css'
import {FaCheck, FaTimes} from 'react-icons/fa';

interface ToDoProps {
  text: string;
  completed: boolean;
  onComplete: any;
  onDelete: any;
}

const ToDoItem: React.FC<ToDoProps> = ({
  text,
  completed,
  onComplete,
  onDelete,
}: ToDoProps) => {
  return (
    <li className="TodoItem">
      <FaCheck
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onComplete}
      />
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <FaTimes
        className='Icon Icon-delete'
        onClick={onDelete}
      />
    </li>
  );
};

export default ToDoItem;
