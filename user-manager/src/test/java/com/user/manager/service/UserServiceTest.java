package com.user.manager.service;

import com.user.manager.models.User;
import com.user.manager.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    UserRepository userRepository;

    @InjectMocks
    UserServiceImpl userService;

    @Test
    public void testGetAllUsers() {
        List<User> mockUsers = getMockUsers();
        Mockito.when(userRepository.findAll()).thenReturn(mockUsers);
        List<User> users = userService.getAllUsers();
        assertNotNull(users);
        assertIterableEquals(mockUsers, users);
    }

    private List<User> getMockUsers() {
        List<User> userList = new ArrayList<>();
        User user = new User();
        user.setName("Test User");
        userList.add(user);
        return userList;
    }
}
