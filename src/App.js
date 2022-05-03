import './App.css';
import { useState, useEffect } from 'react';
import Header from './component/header';
import InputForm from './component/inputForm';
import TodoList from './component/todoList';
import data from "./data.json";

function App() {
  const [todos, setTodos] = useState([]);

  // fetch data from the data.json 
  useEffect(() => {
    setTodos(data);
  }, []);

  const handleNewTodo = (todo) => {
    const newTodo = {
      "id" : Math.floor(Math.random() * 999999999999999),
      "message" : todo,
      "isComplete" : false
    };

    setTodos(preVal => {
      const newData = [...preVal];
      newData.push(newTodo);
      return newData;
    });
  };

  return (
    <div className="App">
      <Header/>
      <InputForm onNewTodo={handleNewTodo}/>
      <TodoList data={todos}/>
    </div>
  );
}

export default App;
