import React, { useState } from "react";
import { Button, Form, Card, Spinner, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";

const SignUp = ({ changeFormType }) => {
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (
      form.checkValidity() &&
      password === passwordConf &&
      username.length > 4
    ) {
      const payload = {
        username,
        password,
        email,
        name,
        surname,
      };

      setLoading(true);
      axios
        .post("/api/v1/user/sign-up", payload)
        .then(() => {
          toast.success("successful");
          clearFormElement();
          setLoading(false);
        })
        .catch(() => {
          toast.error("Danger");
        });
    }
  };

  const clearFormElement = () => {
    setUsername("");
    setEmail("");
    setName("");
    setSurname("");
    setPassword("");
    setPasswordConf("");
  };

  return (
    <Card>
      <Form onSubmit={onSubmit}>
        <Card.Header>
          <h2 className="text-center">Sign Up</h2>
        </Card.Header>

        <Card.Body>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              autoComplete="false"
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              isInvalid={username && username.length < 5}
            />
            <Form.Control.Feedback type="invalid">
              en az 5 karakter giriniz.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoComplete="false"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Surname"
              required
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              required
              isInvalid={passwordConf && password !== passwordConf}
              value={passwordConf}
              onChange={(e) => setPasswordConf(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Şifre aynı değil
            </Form.Control.Feedback>
          </Form.Group>
        </Card.Body>

        <Card.Footer>
          <Row>
            <Col className="mt-2">
              <h6>
                I have &nbsp;
                <Card.Link
                  role="button"
                  onClick={() => {
                    changeFormType(0);
                  }}
                >
                  account
                </Card.Link>
              </h6>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <Button type="submit" disabled={loading}>
                {loading && (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                    />
                    &nbsp;
                  </>
                )}
                Sign In
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Form>
    </Card>
  );
};

export default SignUp;
