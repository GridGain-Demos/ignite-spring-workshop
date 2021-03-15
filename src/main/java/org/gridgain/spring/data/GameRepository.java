package org.gridgain.spring.data;

import org.apache.ignite.springdata22.repository.IgniteRepository;
import org.apache.ignite.springdata22.repository.config.RepositoryConfig;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
@RepositoryConfig(cacheName = "games")
public interface GameRepository extends IgniteRepository<Game, UUID> {

    List<Game> findAllByUserIdAndState(UUID userId, GameState state);

}
