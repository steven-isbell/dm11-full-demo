import React from "react";

const Login = () => {
  return (
    <div>
      <a href={process.env.REACT_APP_LOGIN}>
        <button>Login</button>
      </a>
    </div>
  );
};

export default Login;
