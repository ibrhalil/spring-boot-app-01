import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import Forgot from "./Forgot";
import "./style.css";

const LoginWrapper = ({ typeIndex = 0 }) => {
  const type = ["login", "signup", "forgot"];

  const [selectTab, setSelectTab] = useState(type[typeIndex]);

  const changeFormType = (index) => {
    if (index === 0 || index === 1 || index === 2) setSelectTab(type[index]);
  };

  return (
    <div
      style={{
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div className="login-container">
        <div className="login-form">
          {selectTab === "login" && <Login changeFormType={changeFormType} />}
          {selectTab === "signup" && <SignUp changeFormType={changeFormType} />}
          {selectTab === "forgot" && <Forgot changeFormType={changeFormType} />}
        </div>
      </div>
    </div>
  );
};

export default LoginWrapper;
