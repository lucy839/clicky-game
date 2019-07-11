// Using React and applying style.css
import React from "react";
import "./style.css";

// Function that set up navbar with brand, message, and scores with prop parameter received
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

// Export NavBar
export default NavBar;