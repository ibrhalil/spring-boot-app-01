package com.ibrhalil.springbootapp01.user.service.impl;

import com.ibrhalil.springbootapp01.user.dto.UserDto;
import com.ibrhalil.springbootapp01.user.entity.User;
import com.ibrhalil.springbootapp01.user.repository.UserRepository;
import com.ibrhalil.springbootapp01.user.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public String userSave(UserDto userDto) {

        if(userValid(userDto)){
            User newUser = dto2Model(userDto);
            newUser = userRepository.save(newUser);
            return newUser.getId();
        }
        return null;
    }

    private User dto2Model(UserDto userDto) {
        User user = new User();
        user.setId(userDto.getId());
        user.setUsername(userDto.getUsername());
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setSurname(userDto.getSurname());
        return user;
    }

    private boolean userValid(UserDto userDto) {
        return true;
    }
}
