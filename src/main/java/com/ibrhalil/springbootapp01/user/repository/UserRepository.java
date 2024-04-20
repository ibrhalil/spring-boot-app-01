package com.ibrhalil.springbootapp01.user.repository;

import com.ibrhalil.springbootapp01.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

}
