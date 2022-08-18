package com.user.manager.utils;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.user.manager.models.User;
import com.user.manager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Component
@Profile({"dev", "test"})
public class DefaultDataLoader implements CommandLineRunner {

    @Autowired
    private UserService userService;

    @Autowired
    Environment env;

    @Override
    public void run(String... args) throws Exception {
        System.out.println("**********Inside cmd runner!**********");
        System.out.println(env);
        // read json and write to db
        ObjectMapper mapper = new ObjectMapper();
        TypeReference<List<User>> typeReference = new TypeReference<List<User>>() {
        };
        InputStream inputStream = TypeReference.class.getResourceAsStream("/data/users.json");
        try {
            List<User> users = mapper.readValue(inputStream, typeReference);
            System.out.println("**********Users **********" + users);
            userService.saveAll(users);
            System.out.println("**********Users Saved!**********");
        } catch (IOException e) {
            System.out.println("Unable to save users: " + e.getMessage());
        }
    }
}
