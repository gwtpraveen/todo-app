import "../style/css/todoList.css";
import { useState } from "react";

const TodoList = ({data, onDelete, onComplete, onClearCompleted}) => {
    const [filter, setFilter] = useState("all");

    const gradient = "linear-gradient(95deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))";
    const todoDisStyles = { textDecoration: "line-through", opacity: ".5"};
    const filterActiveStyles = {opacity : 1};
    let todos;

    if (filter === "all") {
        todos = data;
    } else if (filter === "active") {
        todos = data.filter(item => item.isComplete !== true)
    } else if (filter === "completed") {
        todos = data.filter(item => item.isComplete === true)
    }


    const leftTodos = data.filter(item => item.isComplete === false).length;

    return ( 
        <>
            <ul className="todoList">
                {todos.map(item => 
                    <li className="todo" key={item.id}>
                        <div>
                            <div 
                                className="circle" 
                                style={item.isComplete ? { backgroundImage: gradient} : {}}
                                onClick={() => onComplete(item.id)}    
                            >
                                {item.isComplete && <img src="./images/icon-check.svg" alt="" className="checkIcon"/>}
                            </div>
                            <p 
                                className="dis"
                                style={item.isComplete ? todoDisStyles : {}}
                            >
                                {item.message}
                            </p>
                        </div>
                        <img src="./images/icon-cross.svg" alt="close icon" className="closeIcon" onClick={() => onDelete(item.id)}/>
                    </li>
                )}

                <li className="todoListLastRow">
                    <p>{leftTodos} items left</p>
                    <p onClick={onClearCompleted} className="clearCompleted">Clear Completed</p>
                </li>
            </ul>

            <div className="filtersRow">
                <p 
                    className="filters" 
                    onClick={() => setFilter("all")}
                    style={filter === "all" ? filterActiveStyles : {}}
                >All</p>
                <p 
                    className="filters" 
                    onClick={() => setFilter("active")}
                    style={filter === "active" ? filterActiveStyles : {}}
                >Active</p>
                <p 
                    className="filters" 
                    onClick={() => setFilter("completed")}
                    style={filter === "completed" ? filterActiveStyles : {}}
                >Completed</p>
            </div>

            <p className="message">Drag and drop to reorder list</p>
        </>
    );
}
 
export default TodoList;
