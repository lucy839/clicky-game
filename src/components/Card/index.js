import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="col-md-3">
            <div className="card md-5">
                <img alt={props.alt} src={props.src} onClick={props.handleClick} id={props.id}/>
            </div>
        </div>
    );
}

export default Card;
