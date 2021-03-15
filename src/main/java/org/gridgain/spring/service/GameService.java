package org.gridgain.spring.service;

import org.gridgain.spring.data.*;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.*;

@Service
public class GameService {

    private static final int MAX_INCORRECT = 7;

    @Inject
    private GameRepository gameRepository;

    public Game getGameByUser(User user) {
        final List<Game> games = gameRepository.findAllByUserIdAndState(user.getId(), GameState.IN_PROGRESS);

        if (games.isEmpty()) {
            return null;
        }

        assert games.size() == 1;

        return games.get(0);
    }

    public Game guess(UUID gameId, User user, Character guessedCharacter) throws GameException {
        final Optional<Game> gameOptional = gameRepository.findById(gameId);

        final Game game = gameOptional.orElseThrow(() -> {
            return new GameException("Game not found for id " + gameId);
        });

        if (!Objects.equals(game.getUserId(), user.getId())) {
            throw new GameException("Game " + gameId + " was not started by user " + user.getId());
        }

        if (game.getState() != GameState.IN_PROGRESS) {
            throw new GameException("Game " + gameId + " is already over");
        }

        final Set<Character> usedChars = game.getUsedChars();
        if (usedChars.contains(guessedCharacter)) {
            throw new GameException("Game " + gameId + " already has character " + guessedCharacter);
        }

        usedChars.add(guessedCharacter);

        final String word = game.getWord();
        final StringBuilder state = new StringBuilder(game.getDisplayWord());

        int index = word.indexOf(guessedCharacter);

        if (index == -1) {
            game.setIncorrectGuesses(game.getIncorrectGuesses() + 1);

            if (game.getIncorrectGuesses() >= MAX_INCORRECT) {
                game.setState(GameState.LOST);
            }

            return gameRepository.save(game.getId(), game);
        }

        while(index >= 0) {
            state.setCharAt(index, guessedCharacter);
            index = word.indexOf(guessedCharacter, index + 1);
        }

        final String newState = state.toString();
        game.setDisplayWord(newState);

        if (!newState.contains("*")) {
            game.setState(GameState.WON);
        }

        return gameRepository.save(game.getId(), game);
    }

    public Game newGame(User user) {
        final Game game = new Game(user.getId());
        game.setWord("testing");
        game.setDisplayWord("*******");
        gameRepository.save(game.getId(), game);
        return game;
    }
}
