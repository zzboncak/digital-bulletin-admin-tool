import React from "react";
import { Hello } from "./Hello";
import { Login } from "./Components/Login";

export const App = () => (
  <div>
    <h1>Welcome to Meteor, Nate!</h1>
    <Hello />
    <Login />
  </div>
);
