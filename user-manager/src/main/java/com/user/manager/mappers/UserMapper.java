package com.user.manager.mappers;

import com.user.manager.dto.UserDTO;
import com.user.manager.models.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDTO userToUserDto(User user);

    User userDtoToUser(UserDTO userDto);

    List<UserDTO> userToUserDto(List<User> userList);
}
