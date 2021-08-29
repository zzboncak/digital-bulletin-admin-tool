import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = useTracker(() => Meteor.user());

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Meteor.loginWithPassword(username, password);
  };

  // After logging in, push back to home
  // Or if a logged in user tries to go to this page, push them to home
  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user]);

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
          <button
            className="loginButton"
            type="submit"
            disabled={!username.length || !password.length}
          >
            Login
          </button>
        </div>
      </fieldset>
      <Link to="/register">Need an acount?</Link>
    </form>
  );
};
