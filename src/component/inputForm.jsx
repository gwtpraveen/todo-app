import "../style/css/inputForm.css";

const InputForm = (props) => {
    return ( 
        <form method="post" className="form">
            <div className="form-group">
                <input type="text" name="todo" id="todo" className="todoinput" placeholder="Create a new todo..."/>
            </div>
            <input type="submit" value="" className="submitBtn"/>
        </form>
     );
}
 
export default InputForm;