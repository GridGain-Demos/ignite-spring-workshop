import React, {useState} from 'react';
import './App.css';
import { UIRouter, UIView, pushStateLocationPlugin, Transition } from '@uirouter/react';
import {authorize} from "./AuthService";
import { Home } from './HomeComponent';
import { Login } from './LoginComponent';
import {Game} from "./GameComponent";

// define your states
const states = [
    {
        name: 'home',
        url: '/home',
        component: Home,
    },
    {
        name: 'login',
        url: '/',
        component: Login
    },
    {
        name: 'game',
        url: '/game/:gameId',
        params: {
            gameId: {
                type: "string",
                array: false
            }
        },
        resolve: [
            {
                token: 'gameId',
                deps: ['$transition$'],
                resolveFn: (trans: Transition) => {
                    const gameId = trans.params().gameId
                    return gameId;
                }
            }
        ],
        component: Game
    }
];

// select your plugins
const plugins = [pushStateLocationPlugin];

function App() {
    return (
        <UIRouter plugins={plugins} states={states}>
            <UIView />
        </UIRouter>
    )
}

export default App;
