import "../style/css/todoList.css";

const TodoList = (props) => {
    return ( 
        <>
            <ul className="todoList">
                <li className="todo">
                    <div>
                        <div className="circle"></div>
                        <p className="dis">Jog around the park 3x</p>
                    </div>
                    <img src="./images/icon-cross.svg" alt="close icon" className="closeIcon"/>
                </li>
                
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