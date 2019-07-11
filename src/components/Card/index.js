// Using React and applying style.css
import React from "react";
import "./style.css";

// Create each Card with this attributes
function Card(props) {
    return (
        <div className="col-md-3">
            <div className="card md-5">
                <img alt={props.alt} src={props.src} onClick={props.handleClick} id={props.id}/>
            </div>
        </div>
    );
}

// Export Card out
export default Card;
