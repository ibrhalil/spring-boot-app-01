import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignUp from "./SignUp";
import Login from "./Login";
import Forgot from "./Forgot";

const LoginWrapper = ({ typeIndex = 0 }) => {
  const type = ["login", "signup", "forgot"];

  const [selectTab, setSelectTab] = useState(type[typeIndex]);

  const changeFormType = (index) => {
    if (index === 0 || index === 1 || index === 2) setSelectTab(type[index]);
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          {selectTab === "login" && <Login changeFormType={changeFormType} />}
          {selectTab === "signup" && <SignUp changeFormType={changeFormType} />}
          {selectTab === "forgot" && <Forgot changeFormType={changeFormType} />}
        </Col>
      </Row>
    </Container>
  );
};

export default LoginWrapper;
