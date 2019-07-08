import React from "react";
import "./style.css";

function NavBar(prop) {
    return (
        <nav class="navbar">
            <ul>
                <li class ="brand">
                    <a href ="/">Clicky Game!</a>
                </li>
                <li>
                {prop.message}
                </li>
                <li>
                Score : {prop.score} | Top Score : {prop.topScore}
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;