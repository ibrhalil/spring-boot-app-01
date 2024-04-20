package com.ibrhalil.springbootapp01.user.dto;

import lombok.Data;

@Data
public class UserDto {
    private String id;
    private String username;
    private String password;
    private String name;
    private String surname;
    private String email;
}
