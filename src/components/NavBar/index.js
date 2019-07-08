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
                {prop.score}|{prop.topScore}
                </li>
            </ul>

            {/* <span class="navbar-brand mb-0 h1">{prop.message}</span>
            <span class="navbar-brand mb-0 h1">{prop.score}|{prop.topScore}</span> */}
        </nav>
    );
}

export default NavBar;