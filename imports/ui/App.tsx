import { Meteor } from "meteor/meteor";
import React from "react";
import { Hello } from "./Hello";

export const App = () => {
  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <Hello />
    </div>
  );
};
