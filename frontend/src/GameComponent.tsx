import React from "react";
import {UIViewInjectedProps} from "@uirouter/react";
import "./GameComponent.css";
import {GameState, getGame, guess} from "./GameService";

interface OngoingGameState {

    game: GameState | null;

}

interface GameProps {
    gameId: string;
}

export class Game extends React.Component<UIViewInjectedProps & GameProps, OngoingGameState> {

    private static alphabet = "abcdefgh|ijklmnop|qrstuvwx|yz";

    constructor(props: Readonly<UIViewInjectedProps & GameProps> | (UIViewInjectedProps & GameProps)) {
        super(props);

        this.state = {
            game: null
        };
    }

    componentDidMount() {
        getGame(this.props.gameId).then(value => {
            this.setState({
                game: value
            });
        });
    }

    renderGameState() {
        let game = this.state.game;

        if (!game) {
            return;
        }

        let state = game.state;


        if (state === 'IN_PROGRESS') {
            return (<h1>You have {7 - game.incorrectGuesses} tries left</h1>);
        } else if (state === 'LOST') {
            return (<h1>You lost :(</h1>);
        } else if (state === 'WON') {
            return (<h1>You won!</h1>);
        }
    }

    async onLetterClick(letter: string) {
        if (this.state.game == null) {
            return;
        }
        let game = await guess(this.state.game.id, letter);
        if (game == null) {
            return;
        }
        this.setState({
            game
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='state-holder'>
                    {this.renderGameState()}
                </div>
                <div className='game-field'>
                    {this.state.game?.displayWord.split('').map((value, index) => {
                        return (<span className='game-field-letter' key={index}>{value}</span>)
                    })}
                </div>
                <div>
                    {Game.alphabet.split('|').map(row => {
                        return (
                            <div>
                                {
                                    row.split('').map((letter, index) => {
                                        let used = false;
                                        if (this.state.game?.usedChars.includes(letter)) {
                                            used = true;
                                        }
                                        return (
                                            <span key={index} onClick={e => this.onLetterClick(letter)}
                                                  className={'keyboard-letter ' + (used ? 'used' : '')}>{letter}</span>
                                        )
                                    })
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}