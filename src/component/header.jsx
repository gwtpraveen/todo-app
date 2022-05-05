import "../style/css/header.css";
import {useState, useEffect} from "react";


const Header = (props) => {
    const [theme, setTheme] = useState(true);
    let path = "./images/icon-";
    
    useEffect(() => {
        if (theme) {
            document.body.classList = "dark";
        }

        if (!theme) {
            document.body.classList = "";
        }
    })

    theme ? path += "sun.svg" : path += "moon.svg";

    return ( 
        <header className="header">
            <h1 className="h1">TODO</h1>
            <img src={path} alt="icon for theme change" onClick={() => setTheme(preVal => !preVal)} className="themeChangeIcon"/>
        </header>
     );
}
 
export default Header;