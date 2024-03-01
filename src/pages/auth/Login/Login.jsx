import React from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <h1>Login</h1>
        <form>
          <label>
            email : <Input />
          </label>

          <label>
            password : <Input />
          </label>

          <Button name="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
