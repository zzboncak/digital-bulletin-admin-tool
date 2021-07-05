import { Meteor } from "meteor/meteor";
import { ServiceElementsCollection } from "../db/serviceElement";

Meteor.publish('serviceElements', function publishServiceElements() {
    return ServiceElementsCollection.find();
});