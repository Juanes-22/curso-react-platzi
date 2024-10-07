import { createContext, useState, ReactNode } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoContextProps {
  loading: boolean;
  error: boolean;
  completedTodos: number;
  totalTodos: number;
  searchValue: string;
  setSearchValue: (value: string) => void;
  searchedTodos: Todo[];
  completeTodo: (todoId: number) => void;
  deleteTodo: (todoId: number) => void;
  addTodo: (todoId: number) => void;
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

interface TodoProviderProps {
  children: ReactNode;
}

function TodoProvider({ children }: TodoProviderProps) {
  const {
    items: todos,
    setItems: storeTodos,
    loading,
    error,
  } = useLocalStorage<Todo[]>('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (text: string) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false
    });
    storeTodos(newTodos);
  }

  const completeTodo = (todoId: number) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.id === todoId);
    if (todoIndex >= 0) {
      newTodos[todoIndex].completed = true;
      storeTodos(newTodos);
    }
  };

  const deleteTodo = (todoId: number) => {
    const newTodos = todos.filter(todo => todo.id !== todoId);
    storeTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
