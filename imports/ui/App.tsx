import React from "react";
import { Hello } from "./Hello";
import { Login } from "./Login";

export const App = () => {
  return (
    <div>
      <h1>Welcome to Meteor, Nate!</h1>
      <Hello />
      <Login />
    </div>
  );
};
