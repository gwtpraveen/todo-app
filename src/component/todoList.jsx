import "../style/css/todoList.css";
import { useState, useRef } from "react";

const TodoList = ({data, onDelete, onComplete, onClearCompleted}) => {
    const [filter, setFilter] = useState("all");
    const liEle = useRef();
    const todoList = useRef();

    // styles 
    const gradient = "linear-gradient(95deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))";
    const todoDisStyles = { textDecoration: "line-through", opacity: ".5"};
    const filterActiveStyles = {opacity : 1, color: "hsl(220, 98%, 61%)"};
    let todos;

    // apply filters
    if (filter === "all") {
        todos = data;
    } else if (filter === "active") {
        todos = data.filter(item => item.isComplete !== true)
    } else if (filter === "completed") {
        todos = data.filter(item => item.isComplete === true)
    }

    // get how many active todos are left 
    const leftTodos = data.filter(item => item.isComplete === false).length;

    // handle dragging and dropping 
    const handleDragStart = (e) => {
        e.target.classList.add("dragging");
    };

    const handleDragEnd = e => {
        e.target.classList.remove("dragging");
    };

    const handleDragOver = (e) => {
        try {
            const draggingElement = document.querySelector(".dragging");
            const todolist = document.querySelector(".todoList");
            if (todolist.lastElementChild.previousElementSibling !== e.target) {
                todolist.insertBefore(draggingElement, e.target);
            } else {
                todolist.insertBefore(draggingElement, todolist.lastElementChild);
            }
        } catch(err) {
            return null
        }
    }

    return ( 
        <>
            <ul className="todoList" ref={todoList}>
                {todos.map(item => 
                    <li className="todo" key={item.id} 
                        ref={liEle}
                        draggable="true" 
                        onDragStart={handleDragStart} 
                        onDragEnd={handleDragEnd} 
                        onDragOver={handleDragOver}
                        >
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

                {/* bottom row  */}
                <li className="todoListLastRow">
                    <p>{leftTodos} items left</p>
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
                    <p onClick={onClearCompleted} className="clearCompleted">Clear Completed</p>
                </li>
            </ul>

            <p className="message">Drag and drop to reorder list</p>
        </>
    );
}
 
export default TodoList;
