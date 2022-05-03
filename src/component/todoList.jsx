import "../style/css/todoList.css";

const TodoList = (props) => {
    return ( 
        <ul>
            <li>
                <div className="circle"></div>
                <p>Jog around the park 3x</p>
                <img src="./images/icon-cross.svg" alt="close icon" />
            </li>
        </ul>
     );
}
 
export default TodoList;