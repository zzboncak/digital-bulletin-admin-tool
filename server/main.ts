import { Meteor } from "meteor/meteor";
import { ServiceElementsCollection } from "../imports/db/serviceElement";
import { ServiceElement } from "/types/types";
import "/imports/api/serviceElementsPublication";

function insertServiceElement(
  serviceElement: Pick<
    ServiceElement,
    "title" | "isExpandable" | "content" | "type"
  >
) {
  const { title, isExpandable, content, type } = serviceElement;
  ServiceElementsCollection.insert({
    title,
    isExpandable,
    content,
    type,
    createdAt: new Date()
  });
}

Meteor.startup(() => {
  // Start with a song.
  if (ServiceElementsCollection.find().count() === 0) {
    insertServiceElement({
      title: "God is Able",
      isExpandable: true,
      type: "song",
      content: `God is able He will never fail
      He is Almighty God
      Greater than all we seek greater than all we ask
      He has done great things
      
      Lifted up He defeated the grave
      Raised to life our God is able
      In His Name we overcome
      For the Lord our God is able

      God is with us God is on our side
      He will make a way
      Far above all we know far above all we hope
      He has done great things

      Lifted up He defeated the grave
      Raised to life our God is able
      In His Name we overcome
      For the Lord our God is able

      God is with us He will go before
      He will never leave us He will never leave us
      God is for us He has open arms
      He will never fail us He will never fail us

      God is with us He will go before
      He will never leave us He will never leave us
      God is for us He has open arms
      He will never fail us He will never fail us

      Lifted up He defeated the grave
      Raised to life our God is able
      In His Name we overcome
      For the Lord our God is able

      Lifted up He defeated the grave
      Raised to life our God is able
      In His Name we overcome
      For the Lord our God is able

      For the Lord our God is able
      For the Lord our God is able`
    });
  }
});
