package com.user.manager.repository;

import com.user.manager.models.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    Page<User> findByNameContaining(String name, Pageable pageable);

    Page<User> findAll(Pageable pagingSort);
}
