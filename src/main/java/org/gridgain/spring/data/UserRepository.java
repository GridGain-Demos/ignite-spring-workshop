package org.gridgain.spring.data;

import org.apache.ignite.springdata22.repository.IgniteRepository;
import org.apache.ignite.springdata22.repository.config.RepositoryConfig;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
@RepositoryConfig(cacheName = "users")
public interface UserRepository extends IgniteRepository<User, UUID> {

    User findByUserName(String userName);

}
