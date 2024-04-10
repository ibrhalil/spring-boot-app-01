import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import "./LoginWrapperStyle.css";

const LoginWrapper = () => {
  const [selectTab, setSelectTab] = useState(false);
  const [signupInputs, setSignupInputs] = useState([
    {
      label: "User Name",
      type: "text",
      show: false,
      validated: "",
      id: "c",
      value: "",
    },
    {
      label: "Email",
      type: "email",
      show: false,
      validated: "",
      id: "d",
      value: "",
    },
    {
      label: "Password",
      type: "password",
      show: false,
      validated: "",
      id: "e",
      value: "",
    },
    {
      label: "Re-Enter Password",
      type: "password",
      show: false,
      validated: "",
      id: "f",
      value: "",
    },
  ]);

  const [loginInputs, setLoginInputs] = useState([
    {
      label: "User Name",
      type: "text",
      show: true,
      validated: "",
      id: "a",
      value: "",
    },
    {
      label: "Password",
      type: "password",
      show: true,
      validated: "",
      id: "b",
      value: "",
    },
  ]);

  const inUpClick = () => {
    setSelectTab(!selectTab);
  };

  const SignupLink = () => (
    <div className="signup-link">
      <p className="in-out">
        Don't have an account?{" "}
        <a href="#" onClick={inUpClick}>
          Sign Up Here
        </a>
      </p>
    </div>
  );

  const SubmitBtn = (e) => (
    <>
      <hr />
      <button
        className="submit-button"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          console.log("e", e);
        }}
      >
        Submit
      </button>
    </>
  );

  return (
    <>
      <Login
        selectTab={selectTab}
        inputs={loginInputs}
        inputFunc={setLoginInputs}
        signupLink={SignupLink}
        submitBtn={SubmitBtn}
      />
      {/*      <SignUp
        selectTab={selectTab}
        inputs={signupInputs}
        inputFunc={setSignupInputs}
        signupLink={SignupLink}
        submitBtn={SubmitBtn}
      /> */}
    </>
  );
};

export default LoginWrapper;
