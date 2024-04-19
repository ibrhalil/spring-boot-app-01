import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SignUp = ({ changeFormType }) => {
  return (
    <Form>
      <h2
        style={{
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        Sign Up
      </h2>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          autoComplete="false"
          type="email"
          placeholder="Email"
          className="input-field"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          autoComplete="false"
          type="text"
          placeholder="Username"
          className="input-field"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          className="input-field"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          className="input-field"
        />
      </Form.Group>
      <div className="button-container">
        <Button
          className="register-button"
          onClick={() => {
            changeFormType(0);
          }}
        >
          Login
        </Button>
        <Button className="login-button" type="submit">
          Sign In
        </Button>
      </div>
    </Form>
  );
};

export default SignUp;
