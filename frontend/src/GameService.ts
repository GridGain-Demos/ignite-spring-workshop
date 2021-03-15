import {apiUrl} from "./config";


export async function guess(gameId: string, letter: string): Promise<GameState | null> {
    const requestOptions: RequestInit = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
    };

    let result0 = await fetch(`${apiUrl}/game/guess?gameId=${gameId}&guessedCharacter=${letter}`, requestOptions);

    if (!result0.ok) {
        return null;
    }

    return JSON.parse(await result0.text());
}

export async function getGame(gameId: string): Promise<GameState | null> {
    let result0 = await fetch(`${apiUrl}/game`, {
        credentials: 'include'
    });

    if (!result0.ok) {
        return null;
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