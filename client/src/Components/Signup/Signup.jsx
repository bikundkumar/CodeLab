import React from "react";

import "./Signup.css";

const Signup = () => {
  return (
    <div id="Signup" className="flex-col">
      <h1>Signup</h1>
      <form action="/signup" method="post" className="signup-form">
        <div className="subform">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" placeholder="Your Name" />
        </div>

        <div className="subform">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" placeholder="Your Email" />
        </div>

        <div className="subform">
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" placeholder="Your Password" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
