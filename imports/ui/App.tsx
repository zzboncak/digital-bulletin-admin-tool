import { Meteor } from "meteor/meteor";
import React from "react";
import { Hello } from "./Hello";
import { useTracker } from "meteor/react-meteor-data";
import { ServiceElementsCollection } from "../db/serviceElement";

export const App = () => {
  const { serviceElements, isLoading } = useTracker(() => {
    const handler = Meteor.subscribe("serviceElements");

    if (!handler.ready()) {
      return { serviceElements: [], isLoading: true };
    }

    const serviceElements = ServiceElementsCollection.find().fetch();

    return { serviceElements, isLoading: false };
  });

  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      {isLoading && <p>Loading...</p>}
      {/** This can be removed, this was just to see data coming through from the server */}
      {serviceElements.map((element, i) => (
        <p key={i}>{element._id}</p>
      ))}
      <Hello />
    </div>
  );
};
