import "../style/css/header.css";
import {useState, useEffect} from "react";


const Header = (props) => {
    const [theme, setTheme] = useState(false);
    let classes = "./images/icon-";
    
    useEffect(() => {
        if (theme) {
            document.body.classList = "dark";
        }

        if (!theme) {
            document.body.classList = "";
        }
    })

    theme ? classes += "sun.svg" : classes += "moon.svg";

    return ( 
        <header className="header">
            <h1 className="h1">TODO</h1>
            <img src={classes} alt="icon for theme change" onClick={() => setTheme(preVal => !preVal)}/>
        </header>
     );
}
 
export default Header;