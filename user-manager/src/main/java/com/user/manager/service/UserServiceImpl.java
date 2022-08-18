package com.user.manager.service;

import com.user.manager.exceptions.UserNotFoundException;
import com.user.manager.models.User;
import com.user.manager.models.UserPage;
import com.user.manager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

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

    @Override
    public User createUser(User user) {
        user.setId(null);// ignores id if exists
        return userRepository.save(user);
    }

    @Override
    public User deleteUser(long id) {
        User user = getUser(id);
        userRepository.deleteById(id);
        return user;
    }

    @Override
    public User getUser(long id) {
        return userRepository.findById(id).orElseThrow(UserNotFoundException::new);
    }

    @Override
    public User updateUser(User user) {
        getUser(user.getId());
        return userRepository.save(user);
    }

    @Override
    public UserPage<User> getPageOfUsers(String nameToSearch, int page, int size, String sort) {
        Pageable pagingSort = PageRequest.of(page, size, Sort.by(sort));
        Page<User> users = null;
        if(nameToSearch == null || nameToSearch.trim().length()==0){
            users = userRepository.findAll(pagingSort);
        }else{
            users = userRepository.findByNameContaining(nameToSearch, pagingSort);
        }
        UserPage<User> result = new UserPage<>();
        result.setContent(users.getContent());
        result.setCurrentPage(users.getNumber());
        result.setTotalItems(users.getTotalElements());
        result.setTotalPages(users.getTotalPages());
        return result;
    }
}
