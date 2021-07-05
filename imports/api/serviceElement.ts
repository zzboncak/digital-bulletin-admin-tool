import { Mongo } from "meteor/mongo";
import { ServiceElement } from "/types/types";

export const ServiceElementsCollection = new Mongo.Collection<ServiceElement>("serviceElement");
