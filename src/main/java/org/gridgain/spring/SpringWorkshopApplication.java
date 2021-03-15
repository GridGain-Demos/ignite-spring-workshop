package org.gridgain.spring;

import org.apache.ignite.springdata22.repository.config.EnableIgniteRepositories;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableIgniteRepositories
public class SpringWorkshopApplication {

    public static void main(String[] args)  {
        SpringApplication.run(SpringWorkshopApplication.class, args);
    }

}
