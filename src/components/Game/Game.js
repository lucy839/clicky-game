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
        topScore: 0,
        correct: "neutral"
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
                    message: "You guessed incorrectly!",
                    correct: "incorrect"
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
                    message: "You guessed correctly!",
                    correct: "correct"

                })
        }
    };

    render() {
        let setStateTimeout = function(game){
            game.setState({
                correct:"neutral"
            })
        }
        var className = '';
        var id = '';
        if (this.state.correct === "correct"){
           className = 'correct';
           setTimeout(setStateTimeout, 500, this);
        }else if (this.state.correct === "incorrect") {
            className = 'incorrect';
            id = 'incorrect'
            setTimeout(setStateTimeout, 500, this);
        } 
        return (
            <div>
                
                <NavBar
                    score={this.state.score}
                    message={this.state.message}
                    topScore={this.state.topScore}
                    correct = {this.state.correct}
                    className = {className}
                />
                <header class ="header">
                    <h1>Clicky Game</h1>
                    <h2>Click on an image to earn points, but don't click on any more than once</h2>
                </header>
                <main class = "container" id = {id}>
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
