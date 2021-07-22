import { Meteor } from "meteor/meteor";
import React, { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Meteor.loginWithPassword(username, password);
  };

  return (
    <form className="loginForm" onSubmit={(e) => formSubmit(e)}>
      <fieldset className="inputGroup">
        <h2 className="formTitle">Ready to plan a service?</h2>
        <div className="inputContainer">
          <label htmlFor="username">Username:</label>
          <input
            name="username"
            className="loginInput"
            type="text"
            placeholder="Whatever You Want"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            className="loginInput"
            type="password"
            placeholder="Make Strong Like Bull"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="loginButtonContainer">
          <button className="loginButton" type="submit">
            Login
          </button>
        </div>
      </fieldset>
    </form>
  );
};
