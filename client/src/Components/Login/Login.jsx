import React from "react";

import "./Login.css";

const Login = () => {
  return (
    <div id="login" className="flex-col">
      <h1>Login</h1>
      <form action="/login" className="login-from" method="post">
        <div className="logform">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" placeholder="Your Name" />
        </div>

        <div className="logform">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" placeholder="Your Email" />
        </div>

        <div className="logform">
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" placeholder="Your Password" />
        </div>
      </form>
    </div>
  );
};

export default Login;
