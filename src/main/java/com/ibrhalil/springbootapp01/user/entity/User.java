package com.ibrhalil.springbootapp01.user.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "t_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String username;
    private String password;
    private String name;
    private String surname;
    private String email;
}
