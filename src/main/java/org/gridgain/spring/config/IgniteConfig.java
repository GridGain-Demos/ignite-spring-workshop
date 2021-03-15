package org.gridgain.spring.config;

import org.apache.ignite.Ignite;
import org.apache.ignite.configuration.CacheConfiguration;
import org.apache.ignite.springdata22.repository.config.EnableIgniteRepositories;
import org.apache.ignite.springframework.boot.autoconfigure.IgniteConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.UUID;

@Configuration
@EnableIgniteRepositories
public class IgniteConfig {

    @Bean(name = "igniteInstance")
    public Ignite igniteInstance(Ignite ignite) {
        ignite.active(true);
        return ignite;
    }

}
