package com.ibrhalil.springbootapp01.user.service;

import com.ibrhalil.springbootapp01.user.dto.UserDto;

public interface UserService {
    String userSave(UserDto userDto);

    String login(UserDto userDto);
}
