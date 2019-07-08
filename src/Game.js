import React, { Component } from "react";
import Card from "./components/Card";
import Characters from "./images.json"
import NavBar from "./components/NavBar/index.js";


class Game extends Component {
    state = {
        score: 0,
        characters: Characters,
        selectedChar: [],
        message:"Click an image to begin!",
        topScore:0
    };

    handleClick = event => {
        const currentChar = event.target.alt;
        const alreadyClicked =
            this.state.selectedChar.indexOf(currentChar) > -1;
        if (alreadyClicked) {
            console.log("hi");
            if(this.state.score>this.state.topScore){
                this.setState({topScore:this.state.score})
            }
            this.setState(
                {
                    characters: this.state.characters.sort(function (a, b) {
                        return 0.5 - Math.random();
                    }),
                    score: 0,
                    selectedChar: [],
                    message: "You guessed incorrectly!"
                })
        } else {
            this.setState(
                {
                    characters: this.state.characters.sort(function (a, b) {
                        return 0.5 - Math.random();
                    }),
                    score: this.state.score + 1,
                    selectedChar: this.state.selectedChar.concat(
                        currentChar
                    ),
                    message: "You guessed correctly!"

                })
        }
    };

    render() {
        return (
            <div>
                <NavBar
                    score={this.state.score}
                    message ={this.state.message}
                    topScore ={this.state.topScore}
                />
                <div className="jumbotron">
                    <h1>Clicky Game!</h1>
                    <p>Click on an image to earn points, but don't click on any more than once</p>
                </div>
                <div className="row">
                    {Characters.map(character => <Card src={character.image} key={character.id} id={character.id} alt={character.name} endGame={this.endGame} handleClick={this.handleClick} score={this.state.score} />)}
                </div>
                <footer>Clicky Game!</footer>
            </div>
        );
    }
}

export default Game;
