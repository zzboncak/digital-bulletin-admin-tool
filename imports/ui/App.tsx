import { Meteor } from "meteor/meteor";
import React from "react";
import { Login } from "./Login";
import { useTracker } from "meteor/react-meteor-data";

export const App = () => {
  const user = useTracker(() => Meteor.user());

  return (
    <div>
      {!!user && (
        <>
          <h1>Welcome to Meteor, Nate!</h1>
          <button onClick={() => Meteor.logout()}>Log out</button>
        </>
      )}
      {!user && <Login />}
    </div>
  );
};
