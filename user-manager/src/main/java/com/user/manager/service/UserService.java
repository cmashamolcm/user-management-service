package com.user.manager.service;

import com.user.manager.models.User;

import java.util.List;

public interface UserService {
    List<User> saveAll(List<User> users);

    List<User> getAllUsers();
}
