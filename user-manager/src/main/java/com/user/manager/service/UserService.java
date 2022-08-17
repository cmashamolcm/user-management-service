package com.user.manager.service;

import com.user.manager.dto.UserPageDTO;
import com.user.manager.models.User;
import com.user.manager.models.UserPage;

import java.util.List;

public interface UserService {
    List<User> saveAll(List<User> users);

    List<User> getAllUsers();

    User createUser(User user);

    User deleteUser(long id);

    User getUser(long id);

    User updateUser(User user);

    UserPage<User> getPageOfUsers(String nameToSearch, int page, int size, String sort);
}
