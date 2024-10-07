import './index.css';

import AppUI from './components/AppUI';
import {TodoProvider} from './TodoContext';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
