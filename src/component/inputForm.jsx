import "../style/css/inputForm.css";

const InputForm = ({onNewTodo}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let userInput = e.target.firstElementChild.firstElementChild.value;
        onNewTodo(userInput);
        e.target.firstElementChild.firstElementChild.value = null;
    }

    return ( 
        <form method="post" className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" name="todo" id="todo" className="todoinput" placeholder="Create a new todo..." autoComplete="off"/>
                <div className="circle"></div>
            </div>
            <input type="submit" value="" className="submitBtn"/>
        </form>
     );
}
 
export default InputForm;