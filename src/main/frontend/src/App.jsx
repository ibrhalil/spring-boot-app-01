import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginWrapper from "./components/pages/login/LoginWrapper";

function App() {
  return (
    <>
      <LoginWrapper typeIndex={0} />
      <LoginWrapper typeIndex={1} />
      <LoginWrapper typeIndex={2} />
    </>
  );
}

export default App;
