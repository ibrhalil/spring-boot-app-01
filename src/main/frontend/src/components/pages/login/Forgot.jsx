import React from "react";
import { Button, Form } from "react-bootstrap";

const Forgot = ({ changeFormType }) => {
  return (
    <Form>
      <h2
        style={{
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        Forgot
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

      <div className="button-container">
        <Button className="login-button" type="submit">Reset</Button>
      </div>
      <div className="button-container">
        <Button
          className="register-button"
          onClick={() => {
            changeFormType(0);
          }}
        >
          Login
        </Button>
      </div>
    </Form>
  );
};

export default Forgot;
