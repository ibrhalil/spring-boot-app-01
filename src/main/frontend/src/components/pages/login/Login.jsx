import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Login = ({ changeFormType }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const onSubmit = () => {
    axios.post("http://google.com/test", {
      username: username,
      password: password,
    });
  };

  return (
    <Form>
      <h2
        style={{
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        Login
      </h2>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          autoComplete="false"
          type="text"
          placeholder="Username"
          className="input-field"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          className="input-field"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>
      <div className="button-container">
        <Button className="login-button" type="submit" onClick={onSubmit}>
          Login
        </Button>
      </div>
      <div className="button-container">
        <Button
          className="register-button"
          onClick={() => {
            changeFormType(1);
          }}
        >
          Sign In
        </Button>
        <Button
          className="forgot-button"
          onClick={() => {
            changeFormType(2);
          }}
        >
          Forgot
        </Button>
      </div>
    </Form>
  );
};

export default Login;
