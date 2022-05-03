import './App.css';
import Header from './component/header';
import InputForm from './component/inputForm';
import TodoList from './component/todoList';

function App() {
  return (
    <div className="App">
      <Header/>
      <InputForm/>
      <TodoList/>
    </div>
  );
}

export default App;
