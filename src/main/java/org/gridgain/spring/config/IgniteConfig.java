package org.gridgain.spring.config;

import org.apache.ignite.Ignite;
import org.apache.ignite.configuration.CacheConfiguration;
import org.apache.ignite.springdata22.repository.config.EnableIgniteRepositories;
import org.apache.ignite.springframework.boot.autoconfigure.IgniteConfigurer;
import org.gridgain.spring.data.Game;
import org.gridgain.spring.data.User;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.UUID;

@Configuration
public class IgniteConfig {

    @Bean(name = "igniteInstance")
    public Ignite igniteInstance(Ignite ignite) {
        ignite.active(true);
        return ignite;
    }

    @Bean
    public IgniteConfigurer configurer() {
        return igniteConfiguration -> {
            CacheConfiguration cacheUsers = new CacheConfiguration("users");
            cacheUsers.setIndexedTypes(UUID.class, User.class);

            CacheConfiguration cacheGames = new CacheConfiguration("games");
            cacheGames.setIndexedTypes(UUID.class, Game.class);

            igniteConfiguration.setCacheConfiguration(cacheUsers, cacheGames);
        };
    }

}
