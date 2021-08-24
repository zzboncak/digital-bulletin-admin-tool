import { Meteor } from "meteor/meteor";
import React from "react";
import { Login } from "./Login";
import { useTracker } from "meteor/react-meteor-data";
import { Switch, Route, Link } from "react-router-dom";

export const App = () => {
  const user = useTracker(() => Meteor.user());

  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <div>
          {!!user && (
            <>
              <h1>Welcome to Meteor, Nate!</h1>
              <button onClick={() => Meteor.logout()}>Log out</button>
            </>
          )}
          {!user && <Link to="/login">Login</Link>}
        </div>
      </Route>
    </Switch>
  );
};
