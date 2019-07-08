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
    //   return (
    //     <div
    //       className="card"
    //       style={{
    //         // backgroundImage: props.image ? `url(${props.image})` : "none"
    //         backgroundImage: props.image ? "url ('/squirtle.png')" : "none"
    //       }}
    //     >
    //         {/* <img alt ="squirtle" src ="squirtle.png"> </img> */}
    //       {/* {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    //       <CardBtn
    //         style={{ opacity: props.image ? 1 : 0 }}
    //         onClick={props.handleBtnClick}
    //         data-value="pass"
    //       />
    //       <CardBtn
    //         style={{ opacity: props.image ? 1 : 0 }}
    //         onClick={props.handleBtnClick}
    //         data-value="pick"
    //       /> */}
    //     </div>
    //   );
}

export default Card;
