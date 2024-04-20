import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form } from "react-bootstrap";

const Login = ({ changeFormType }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      username,
      password,
    };

    axios
      .post("/api/v1/user/login", payload)
      .then(() => {
        toast.success("successful");
      })
      .catch((e) => {
        toast.error("Danger");
        console.error(e);
      });
  };

  return (
    <Form onSubmit={onSubmit}>
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
          required
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
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>
      <div className="button-container">
        <Button className="login-button" type="submit">
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
