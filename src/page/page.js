import React from "react";
import NavBar from "./navbar.js";
import Game from "./Game";
// import NavBar from "./components/navbar.js";

function Page() {
  return (
    <div>
      <NavBar />
      <div className="jumbotron">
        <h1>Clicky Game!</h1>
        <p>Click on an image to earn points, but don't click on any more than once</p>
      </div>
      <Game />
      <footer>Clicky Game!</footer>
    </div>
    //   <div className="card mb-4">
    //     <div className="card-header">
    //       <h3>Card title</h3>
    //     </div>
    //     <div className="card-body">
    //       <p className="card-text">Card content</p>
    //     </div>
    //   </div>
    //   <div className="card mb-4">
    //     <div className="card-header">
    //       <h3>Card title</h3>
    //     </div>
    //     <div className="card-body">
    //       <p className="card-text">Card content</p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Page;