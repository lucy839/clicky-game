import React, { Component } from "react";
import Card from "../Card/index";
import Characters from "../../images.json"
import NavBar from "../NavBar/index";
import "./style.css";

class Game extends Component {
    state = {
        score: 0,
        characters: Characters,
        selectedChar: [],
        message: "Click an image to begin!",
        topScore: 0
    };

    handleClick = event => {
        const currentChar = event.target.alt;
        const alreadyClicked =
            this.state.selectedChar.indexOf(currentChar) > -1;
        if (alreadyClicked) {
            console.log("hi");
            if (this.state.score > this.state.topScore) {
                this.setState({ topScore: this.state.score })
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
                    message={this.state.message}
                    topScore={this.state.topScore}
                />
                <header class ="header">
                    <h1>Clicky Game!</h1>
                    <h2>Click on an image to earn points, but don't click on any more than once</h2>
                </header>
                <main class ="container">
                <div className="row">
                {Characters.map(character => 
                    <Card src={character.image} key={character.id} id={character.id} 
                    alt={character.name} endGame={this.endGame} handleClick={this.handleClick} 
                    score={this.state.score} />)}
                </div>
                </main>
            
               
                <footer class="footer">
                    <div class="bottom">
                    2019 Youngju Lucy Lee | <a href= "https://github.com/lucy839/clicky-game">GitHub </a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Game;
