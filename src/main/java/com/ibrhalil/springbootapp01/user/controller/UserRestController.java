package com.ibrhalil.springbootapp01.user.controller;

import org.springframework.web.bind.annotation.*;
import com.ibrhalil.springbootapp01.user.dto.UserDto;
import com.ibrhalil.springbootapp01.user.service.UserService;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/v1/user")
@AllArgsConstructor
public class UserRestController {

    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody UserDto userDto) {
        return userService.userSave(userDto);
    }

    @PostMapping("/sign-up")
    public String signUp(@RequestBody UserDto userDto) {
        System.out.println(userDto);
        return userDto.toString();
    }

    @PostMapping("/forgot")
    public String forgotPass(@RequestBody UserDto userDto) {
        System.out.println(userDto);
        return userDto.toString();
    }

    @GetMapping("/test")
    public String test() {
        return "test";
    }

}
