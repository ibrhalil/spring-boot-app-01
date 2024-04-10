import React from "react";

const Login = ({ inputs, signUp, inUpClick, submitForm }) => {
  const SignupLink = ({ inUpClick }) => (
    <div className="signup-link">
      <p className="in-out">
        Don't have an account?{" "}
        <a href="#" onClick={inUpClick}>
          Sign Up Here
        </a>
      </p>
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

  const Submit = () => (
    <div>
      <hr />
      <button className="submit-button" type="submit">
        {" "}
        Submit
      </button>
    </div>
  );

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

  return (
    <div className={signUp ? "login login-closed" : "login"}>
      <h1>Log In</h1>
      <hr />
      <Form inputs={inputs} submitForm={submitForm} />
      <SignupLink inUpClick={inUpClick} />
    </div>
  );
};

export default Login;
