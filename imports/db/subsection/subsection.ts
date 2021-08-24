import { Mongo } from "meteor/mongo";
import { Subsection } from "/types/types";

export const SubsectionCollection = new Mongo.Collection<Subsection>(
  "subsection"
);
