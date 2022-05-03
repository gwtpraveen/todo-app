import "../style/css/todoList.css";

const TodoList = ({data, onDelete, onComplete}) => {
    const gradient = "linear-gradient(95deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))";
    const todoDisStyles = { textDecoration: "line-through", opacity: ".5"}

    return ( 
        <>
            <ul className="todoList">
                {data.map(item => 
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

                <li className="opt">
                    <p>5 items left</p>
                    <p>Clear Completed</p>
                </li>
            </ul>

            <div className="filters">
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
            </div>

            <p className="message">Drag and drop to reorder list</p>
        </>
    );
}
 
export default TodoList;
