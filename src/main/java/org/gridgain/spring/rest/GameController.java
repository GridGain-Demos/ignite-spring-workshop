package org.gridgain.spring.rest;

import org.gridgain.spring.config.security.IgniteUserPrincipal;
import org.gridgain.spring.data.Game;
import org.gridgain.spring.data.User;
import org.gridgain.spring.service.GameService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.util.UUID;

@RestController
@RequestMapping("/game")
public class GameController {

    @Inject
    private GameService gameService;

    @PostMapping("/start")
    public ResponseEntity<Game> startGame() {
        Game game = gameService.newGame(getUser());
        return ResponseEntity.ok(game);
    }

    @GetMapping
    public ResponseEntity<Game> getGame() {
        final User user = getUser();
        final Game game = gameService.getGameByUser(user);
        return ResponseEntity.ok(game);
    }

    @PostMapping("/guess")
    public ResponseEntity<Game> guess(@RequestParam UUID gameId, @RequestParam Character guessedCharacter) {
        return ResponseEntity.ok(gameService.guess(gameId, getUser(), guessedCharacter));
    }

    private User getUser() {
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        final IgniteUserPrincipal details = (IgniteUserPrincipal) authentication.getPrincipal();
        return details.getUser();
    }

}
