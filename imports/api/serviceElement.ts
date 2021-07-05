import { Mongo } from "meteor/mongo";
import { ServiceElement } from "/types/types";

export const ServiceElements = new Mongo.Collection<ServiceElement>("serviceElement");
