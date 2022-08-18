package com.user.manager.controllers;

import com.user.manager.dto.UserDTO;
import com.user.manager.dto.UserPageDTO;
import com.user.manager.mappers.UserMapper;
import com.user.manager.models.User;
import com.user.manager.models.UserPage;
import com.user.manager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserMapper userMapper;

    @GetMapping
    public List<UserDTO> getAllUsers() {
        return userMapper.userToUserDto(userService.getAllUsers());
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public UserDTO createUser(@RequestBody UserDTO userDTO) {
        return userMapper.userToUserDto(userService.createUser(userMapper.userDtoToUser(userDTO)));
    }

    @DeleteMapping("/{id}")
    public UserDTO deleteUser(@PathVariable("id") long id) {
        return userMapper.userToUserDto(userService.deleteUser(id));
    }

    @GetMapping("/{id}")
    public UserDTO getUserById(@PathVariable("id") long id) {
        return userMapper.userToUserDto(userService.getUser(id));
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public UserDTO updateUser(@RequestBody UserDTO userDTO) {
        return userMapper.userToUserDto(userService.updateUser(userMapper.userDtoToUser(userDTO)));
    }

    @GetMapping("/page")
    public UserPageDTO<UserDTO> getAllUsersByPage(@RequestParam(required = false) String searchName,
                                                  @RequestParam(defaultValue = "0") int page,
                                                  @RequestParam(defaultValue = "10") int size,
                                                  @RequestParam(defaultValue = "id") String sort) {
        UserPage<User> usersPage = userService.getPageOfUsers(searchName, page, size, sort);
        return new UserPageDTO(
                userMapper.userToUserDto(usersPage.getContent()), usersPage.getTotalElements(), usersPage.getCurrentPage(), usersPage.getCount(), usersPage.getTotalPages()
        );
    }

}
