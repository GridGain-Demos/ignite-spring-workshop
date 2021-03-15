package org.gridgain.spring.data;

import org.apache.ignite.cache.query.annotations.QuerySqlField;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

public class Game {
    @QuerySqlField(index = true)
    private UUID id = UUID.randomUUID();

    @QuerySqlField(index = true)
    private UUID userId;

    private String word;

    private String displayWord;

    private Set<Character> usedChars = new HashSet<>();

    @QuerySqlField
    private GameState state = GameState.IN_PROGRESS;

    private int incorrectGuesses = 0;

    public Game(UUID userId) {
        this.userId = userId;
    }

    public int getIncorrectGuesses() {
        return incorrectGuesses;
    }

    public void setIncorrectGuesses(int incorrectGuesses) {
        this.incorrectGuesses = incorrectGuesses;
    }

    public UUID getId() {
        return id;
    }

    public UUID getUserId() {
        return userId;
    }

    public GameState getState() {
        return state;
    }

    public void setState(GameState state) {
        this.state = state;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public void setDisplayWord(String displayWord) {
        this.displayWord = displayWord;
    }

    public void setUsedChars(Set<Character> usedChars) {
        this.usedChars = usedChars;
    }

    public String getWord() {
        return word;
    }

    public String getDisplayWord() {
        return displayWord;
    }

    public Set<Character> getUsedChars() {
        return usedChars;
    }
}
