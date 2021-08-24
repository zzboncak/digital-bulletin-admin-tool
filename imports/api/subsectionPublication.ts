import { Meteor } from "meteor/meteor";
import { SubsectionCollection } from "/imports/db/subsection/subsection";

Meteor.publish("serviceElements", function publishServiceElements() {
  return SubsectionCollection.find();
});
