import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { ServiceElementsCollection } from '../db/serviceElement';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { ServiceElement } from '/types/types';

const serviceElementSchema = new SimpleSchema({
    _id: {type: String},
    title: {type: String},
    isExpandable: {type: Boolean},
    type: {type: String},
    content: {type: String},
    createdAt: {type: Date},
});

export const updateServiceElement = new ValidatedMethod({
    name: "serviceElement.updateServiceElement",
    validate: serviceElementSchema.validator(),
    run({_id, title, isExpandable, type, content}) {
        const serviceElement = ServiceElementsCollection.findOne(_id);

        if (!serviceElement) {
            throw new Meteor.Error("No service element found!");
        }

        ServiceElementsCollection.update(_id, {
            $set: {
                title,
                isExpandable,
                type,
                content
            }
        });
    }
});

export const insertServiceElement = new ValidatedMethod({
    name: "serviceElement.insertServiceElement",
    validate: serviceElementSchema.validator(),
    run({title, isExpandable, type, content}) {
        const serviceElement: ServiceElement = {
            title,
            isExpandable,
            type,
            content,
            createdAt: new Date()
        };

        ServiceElementsCollection.insert(serviceElement);
    }
});

export const deleteServiceElement = new ValidatedMethod({
    name: "serviceElement.deleteServiceElement",
    validate: serviceElementSchema.validator(),
    run({_id}) {
        const serviceElement = ServiceElementsCollection.findOne(_id);

        if (!serviceElement) {
            throw new Meteor.Error("No service element found!");
        }

        ServiceElementsCollection.remove(_id);
    }
});
