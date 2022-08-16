package com.user.manager.service;

import com.user.manager.models.User;
import com.user.manager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> saveAll(List<User> users) {
        return (List<User>) userRepository.saveAll(users);
    }

    @Override
    public List<User> getAllUsers() {
        return (List<User>) userRepository.findAll();
    }
}
