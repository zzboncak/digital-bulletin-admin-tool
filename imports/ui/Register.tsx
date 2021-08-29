import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

export const Register = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = useTracker(() => Meteor.user());

  const REGEX_UPPER_LOWER_NUMBER =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[\S]+/;
  const isFormValid =
    REGEX_UPPER_LOWER_NUMBER.test(password) && username.length > 3;

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }
    Accounts.createUser({
      username,
      password
    });
    Meteor.loginWithPassword(username, password);
  };

  // Or if a logged in user tries to go to this page, push them to home
  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user]);

  return (
    <form className="loginForm" onSubmit={(e) => formSubmit(e)}>
      <fieldset className="inputGroup">
        <h2 className="formTitle">Need an account?</h2>
        <h4>We got you</h4>
        <i>
          Password must conatin at least 1 upper case, 1 lower case,
          and a number
        </i>
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
            placeholder="shhhhhhhh"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="loginButtonContainer">
          <button
            className="loginButton"
            type="submit"
            disabled={!isFormValid}
          >
            Login
          </button>
        </div>
      </fieldset>
    </form>
  );
};
