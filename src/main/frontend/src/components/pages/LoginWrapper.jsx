import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import "./SignUpStyle.css";

const LoginWrapper = () => {
  const loginInputsF = [
    {
      label: "User Name",
      type: "text",
      show: true,
      validated: "",
      id: "a",
    },
    {
      label: "Password",
      type: "password",
      show: true,
      validated: "",
      id: "b",
    },
  ];

  const signupInputsF = [
    {
      label: "User Name",
      type: "text",
      show: false,
      validated: "",
      id: "c",
    },
    {
      label: "Email",
      type: "email",
      show: false,
      validated: "",
      id: "d",
    },
    {
      label: "Password",
      type: "password",
      show: false,
      validated: "",
      id: "e",
    },
    {
      label: "Re-Enter Password",
      type: "password",
      show: false,
      validated: "",
      id: "f",
    },
  ];

  const [signUp, setSignUp] = useState(false);
  const [signupInputs, setSignupInputs] = useState(signupInputsF);
  const [loginInputs, setLoginInputs] = useState(loginInputsF);

  const inUpClick = () => {
    setSignUp(!signUp);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("signUp",signUp);
    console.log("signupInputs",signupInputs);
    console.log("signupInputs",signupInputs);
    for (let index = 0; index < e.target.length; index++) {
        const element = e.target[index];
        console.log(index+"label",element);
        console.log(index+"value",element.value);
    }
    console.log("e",e.target);
  };

  return (
    <>
      <Login
        signUp={signUp}
        inputs={loginInputs}
        inUpClick={inUpClick}
        submitForm={submitForm}
      />
      <SignUp
        signUp={signUp}
        inputs={signupInputs}
        inUpClick={inUpClick}
        submitForm={submitForm}
      />
    </>
  );
};

export default LoginWrapper;
