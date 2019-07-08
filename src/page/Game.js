import React, { Component } from "react";
import Card from "../components/Card";
import Characters from "../images.json"


class Game extends Component {
  state = {
    score: 1,
    characters: Characters,
    selectedChar: []
    // image: "/squirtle.png",
    // match: false,
    // matchCount: 0
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    // this.loadNextDog();
  }

  handleClick = () => {
    // this.setState({ characters: shuffle(this.state.characters)});
    this.setState(
        {
          fish: this.state.characters.sort(function(a, b) {
            return 0.5 - Math.random();
          })})

    // // Get the data-value of the clicked button
    // const btnType = event.target.attributes.getNamedItem("data-value").value;
    // // Clone this.state to the newState object
    // // We'll modify this object and use it to set our component's state
    // const newState = { ...this.state };

    // if (btnType === "pick") {
    //   // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
    //   newState.match = 1 === Math.floor(Math.random() * 5) + 1;

    //   // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
    //   newState.matchCount = newState.match
    //     ? newState.matchCount + 1
    //     : newState.matchCount;
    // } else {
    //   // If we thumbs down'ed the dog, we haven't matched with it
    //   newState.match = false;
    // }
    // // Replace our component's state with newState, load the next dog image
    // this.setState(newState);
    // this.loadNextDog();
    
  };

//   loadNextDog = () => {
//     API.getRandomDog()
//       .then(res =>
//         this.setState({
//           image: res.data.message
//         })
//       )
//       .catch(err => console.log(err));
//   };

  render() {
    // return (
    //   <div>
    //     <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
    //   </div>
    // );
    return (
        <div className="container" id="card-container">
            <div className="row">
                {Characters.map(character => <Card src={character.image} key={character.id} id={character.id} alt={character.name} endGame={this.endGame} handleClick={this.handleClick} score={this.state.score} />)}
            </div>
        </div>
    );
  }
}

export default Game;
