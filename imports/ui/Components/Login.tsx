import React, { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    console.log("you logged in");
  };

  return (
    <form className="loginForm" onSubmit={(e) => formSubmit(e)}>
      <input
        className="loginInput"
        type="text"
        placeholder="don't mess this up"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="loginInput"
        type="text"
        placeholder="make strong"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};
