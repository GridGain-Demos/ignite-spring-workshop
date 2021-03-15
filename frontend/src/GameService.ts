import {apiUrl, apiUrl2} from "./config";


export async function guess(gameId: string, letter: string): Promise<GameState | null> {
    let req = async (url: string) => {
        const requestOptions: RequestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        };

        return await fetch(`${url}/game/guess?gameId=${gameId}&guessedCharacter=${letter}`, requestOptions);
    };

    let result0;

    try {
        result0 = await req(apiUrl);
        if (!result0.ok) {
            return null;
        }
    } catch (e) {
        result0 = await req(apiUrl2);

        if (!result0.ok) {
            return null;
        }
    }

    return JSON.parse(await result0.text());
}

export async function getGame(): Promise<GameState | null> {
    let req = async (url: string) => {
        return await fetch(`${url}/game`, {
            credentials: 'include'
        })
    };

    let result0;

    try {
        result0 = await req(apiUrl);
        if (!result0.ok) {
            return null;
        }
    } catch (e) {
        result0 = await req(apiUrl2);

        if (!result0.ok) {
            return null;
        }
    }

    return JSON.parse(await result0.text());
}

export async function startGame(): Promise<GameState | null> {
    let req = async (url: string) => {
        return await fetch(`${url}/game/start`, {
            method: 'POST',
            credentials: 'include'
        });
    };

    let result0;

    try {
        result0 = await req(apiUrl);
        if (!result0.ok) {
            return null;
        }
    } catch (e) {
        result0 = await req(apiUrl2);

        if (!result0.ok) {
            return null;
        }
    }

    return JSON.parse(await result0.text());
}

export interface GameState {
    id: string;

    displayWord: string;

    state: "IN_PROGRESS" | "LOST" | "WON";

    usedChars: string[];

    incorrectGuesses: number;
}
