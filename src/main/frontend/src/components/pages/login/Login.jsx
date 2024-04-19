import React from "react";
import { Button, Form } from "react-bootstrap";

const Login = ({ changeFormType }) => {
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
