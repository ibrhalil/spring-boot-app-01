import React, { useState } from "react";

const SignUp = ({ inputs, signUp, inUpClick, submitForm }) => {
  const Form = ({ inputs, submitForm }) => {
    const inputsMapped = inputs.map((i) => (
      <Input
        label={i.label}
        type={i.type}
        show={i.show}
        validated={i.validated}
        id={i.id}
        key={i.id}
      />
    ));

    return (
      <form onSubmit={submitForm}>
        {inputsMapped}
        <Submit />
      </form>
    );
  };

  const Submit = () => (
    <div>
      <hr />
      <button className="submit-button" type="submit">
        {" "}
        Submit
      </button>
    </div>
  );

  const Input = ({ label, type, show, validated, id }) => (
    <div className={show ? "field field-in" : "field"}>
      <label className="label">
        {label}
        <i
          className={validated ? "fa fa-check animate-check" : ""}
          aria-hidden="true"
        ></i>
      </label>
      <br />
      <input className="input" type={type} />
    </div>
  );

  const LoginLink = ({ inUpClick }) => (
    <div className="signup-link">
      <p className="in-out">
        Already have an account?{" "}
        <a href="#" onClick={inUpClick}>
          Log In Here
        </a>
      </p>
    </div>
  );

  return (
    <div className={signUp ? "sign-up" : "sign-up sign-up-closed"}>
      <h1>Sign Up</h1>
      <hr />
      <Form inputs={inputs} submitForm={submitForm} />
      <LoginLink inUpClick={inUpClick} />
    </div>
  );
};

export default SignUp;
