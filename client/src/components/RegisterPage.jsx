import React from "react";
import CreateUser from "./CreateUser";
const RegisterPage = () => {
  return (
    <div className="d-flex flex-column">
      <div className="header text-center">
        <h1>Welcome to Pirate Crew</h1>
      </div>
      <div className="body d-flex">
        <div className="col-4 m-2">
            <CreateUser></CreateUser>
        </div>
        <div className="col-4 m-2"></div>
      </div>
    </div>
  );
};

export default RegisterPage;
