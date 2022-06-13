import './App.css';
import { useState, useEffect } from 'react';
import Header from './component/header';
import InputForm from './component/inputForm';
import TodoList from './component/todoList';

let data = [];


function App() {
  const [todos, setTodos] = useState([]);

  // get data from local storage 
  if (localStorage.getItem("data")) {
    data = JSON.parse(localStorage.getItem("data"));
  }

  // fetch data from the data.json 
  useEffect(() => {
    setTodos(data);
  }, []);


  // add new todos to the list 
  const handleNewTodo = (todo) => {
    const newTodo = {
      "id" : Math.floor(Math.random() * 999999999999999),
      "message" : todo,
      "isComplete" : false
    };

    setTodos(preVal => {
      const newData = [...preVal];
      newData.push(newTodo);
      localStorage.setItem("data", JSON.stringify(newData));
      return newData;
    });
  };


  // check is the todo complete or not 
  const handleComplete = (id) => {
    setTodos(preVal => {
      const newData = JSON.parse(JSON.stringify(preVal));
      const targetTodo = newData.filter(item => item.id === id);
      targetTodo[0].isComplete = !targetTodo[0].isComplete;
      localStorage.setItem("data", JSON.stringify(newData));
      return newData;
    })
  }


  // delete todo 
  const handleDelete = (id) => {
    setTodos(preVal => {
      const newData = JSON.parse(JSON.stringify(preVal));
      return newData.filter(item => item.id !== id);
      });

  }


  // clear all completed todos 
  const handleClearCompleted = () => {
    setTodos(preVal => {
      const newData = JSON.parse(JSON.stringify(preVal));
      return newData.filter(item => item.isComplete === false);
    })

  };


  return (
    <div className="App">
      <Header/>
      <InputForm onNewTodo={handleNewTodo}/>
      <TodoList data={todos} onDelete={handleDelete} onComplete={handleComplete} onClearCompleted={handleClearCompleted}/>
    </div>
  );
}

export default App;
