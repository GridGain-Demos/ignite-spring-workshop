package org.gridgain.spring.data;

import org.apache.ignite.cache.query.annotations.QuerySqlField;

import java.util.UUID;

public class User {

    @QuerySqlField(index = true)
    private UUID id = UUID.randomUUID();

    @QuerySqlField(index = true)
    private String userName;

    @QuerySqlField
    private String password;

    public User(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    public UUID getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public String getPassword() {
        return password;
    }
}
