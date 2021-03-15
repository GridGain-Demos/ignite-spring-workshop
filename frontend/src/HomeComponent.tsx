import React from 'react';
import {StateService, UIViewInjectedProps} from "@uirouter/react";
import {GameState, getGame, startGame} from './GameService';

interface HomeState {
    game: GameState | null;
}

export class Home extends React.Component<UIViewInjectedProps, HomeState>{
    stateService: StateService;

    constructor(props: UIViewInjectedProps) {
        super(props);
        this.state = {
            game: null
        };

        const {stateService} = this.props.transition!.router;
        this.stateService = stateService;
    }

    componentDidMount() {
        getGame().then(value => {
            if (value) {
                this.setState({
                    game: value
                });
            }
        });
    }

    newGame() {
        startGame().then(async value => {
            if (value) {
                this.stateService.go('game', {
                    gameId: value.id
                });
            }
        });
    }

    continueGame() {
        this.stateService.go('game', {
            gameId: this.state.game?.id
        });
    }

    renderElement() {
        if (this.state.game?.state === 'IN_PROGRESS') {
            return (
                <div>
                    <h1>You have a game in progress</h1>
                    <input type='button' className='btn' onClick={e => this.continueGame()} value='Continue'/>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>You don't have an active game</h1>
                    <input type='button' className='btn' onClick={e => this.newGame()} value='Begin'/>
                </div>
            )
        }
    }

    render() {

        return (
            <div className='container'>
                <div style={{'textAlign': 'center'}}>
                    {
                        this.renderElement()
                    }
                </div>
            </div>
        )
    }
}
