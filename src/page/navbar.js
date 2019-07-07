import React from "react";
import Result from "../components/result";
import Score from "../components/score";
import '../App.css';

function NavBar() {
    return (
        <nav class="navbar navbar-light bg-light" id ="navBar">
            <span class="navbar-brand mb-0 h1">Clicky Game</span>
            <span class="navbar-brand mb-0 h1"><Result/></span>
            <span class="navbar-brand mb-0 h1"><Score/></span>
        </nav>
    );
}

export default NavBar;