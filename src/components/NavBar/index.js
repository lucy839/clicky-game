import React from "react";
import "./style.css";

function NavBar(prop) {
    return (
        <nav class="navbar">
            <ul>
                <li class ="brand">
                    <a href ="/">Clicky Game <i class="fas fa-gamepad"></i></a>
                </li>
                <li class = "message">
                <span className = {prop.className}>{prop.message}</span>
                </li>
                <li>
                Score : {prop.score} | Top Score : {prop.topScore}
                </li>
            </ul>
        </nav>
        
    );
    
}

export default NavBar;