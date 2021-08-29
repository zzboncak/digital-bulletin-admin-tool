import React from "react";
import { Meteor } from "meteor/meteor";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useTracker } from "meteor/react-meteor-data";

/**
 * PrivateRoute is like a guarded route. If the user is logged in, he/she is allowed to pass. If not, they are redirected to log in.
 */
export const PrivateRoute: React.FC<RouteProps> = (props) => {
  const user = useTracker(() => Meteor.user());
  return user ? <Route {...props} /> : <Redirect to="/login" />;
};
