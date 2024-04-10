import React from "react";

const Login = ({ selectTab, inputs, inputFunc, signupLink, submitBtn }) => {
  const Input = ({ label, type, show, validated, id, value }) => (
    <div className={show ? "field field-in" : "field"}>
      <label className="label" htmlFor={id}>
        {label}
        <i
          className={validated ? "fa fa-check animate-check" : ""}
          aria-hidden="true"
        ></i>
      </label>
      <br />
      <input className="input" type={type} id={id} value={value} />
    </div>
  );

  const Form = ({ inputs }) => {
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
      <form>
        {inputsMapped}
        {submitBtn()}
      </form>
    );
  };

  return (
    <div className={selectTab ? "login login-closed" : "login"}>
      <h1>Log In</h1>
      <hr />
      <Form inputs={inputs} />
      {signupLink()}
    </div>
  );
};

export default Login;
