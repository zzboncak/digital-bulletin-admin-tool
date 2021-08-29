import { Meteor } from "meteor/meteor";
import React from "react";
import { Login } from "./Login";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

export const App = () => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <PrivateRoute exact path="/">
        <div>
          <h1>Welcome to Meteor, Nate!</h1>
          <button onClick={() => Meteor.logout()}>Log out</button>
        </div>
      </PrivateRoute>
    </Switch>
  );
};
