import {
  idArg,
  inputObjectType,
  list,
  mutationField,
  nonNull,
  objectType,
  queryField,
} from 'nexus';
import { EventTemplate } from 'nexus-prisma';

export const eventTemplateType = objectType({
  name: EventTemplate.$name,
  description: EventTemplate.$description,
  definition(t) {
    t.field(EventTemplate.id);
    t.field(EventTemplate.createdAt);
    t.field(EventTemplate.title);
    t.field(EventTemplate.icon);
    t.field(EventTemplate.description);
    t.field(EventTemplate.comment);
    t.field(EventTemplate.location);
    t.field(EventTemplate.locationId);
    t.field(EventTemplate.duration);
    t.field(EventTemplate.participantText);
    t.field(EventTemplate.participantMail);
    t.field(EventTemplate.organizerText);
    t.field(EventTemplate.finances);
    t.field(EventTemplate.eventInstances);
    t.field(EventTemplate.tenant);
  },
});

export const createEventTemplateInput = inputObjectType({
  name: 'CreateEventTemplateInput',
  description: 'Input needed to create a new event template',
  definition(t) {
    t.field(EventTemplate.title);
    t.field(EventTemplate.icon);
    t.field(EventTemplate.description);
    t.field(EventTemplate.comment);
    t.field(EventTemplate.location);
    t.field(EventTemplate.locationId);
    t.field(EventTemplate.duration);
    t.field(EventTemplate.participantText);
    t.field(EventTemplate.participantMail);
    t.field(EventTemplate.organizerText);
  },
});

export const updateTemplateInputType = inputObjectType({
  name: 'UpdateTemplateInput',
  description: 'Input to update an event template',
  definition(t) {
    t.field(EventTemplate.title);
    t.field(EventTemplate.icon);
    t.field(EventTemplate.description);
    t.field(EventTemplate.organizerText);
    t.field(EventTemplate.location);
    t.field(EventTemplate.locationId);
  },
});

export const listEventTemplatesQuery = queryField('eventTemplates', {
  description: 'Query event templates for the current tenant',
  type: nonNull(list(nonNull(eventTemplateType))),
  resolve: (source, args, context) =>
    context.prisma.eventTemplate.findMany({
      where: {
        tenant: {
          id: context.tenant.id,
        },
      },
    }),
});

export const createEventTemplateMutation = mutationField(
  'createEventTemplate',
  {
    type: eventTemplateType,
    args: {
      eventTemplateInput: nonNull(createEventTemplateInput),
    },
    resolve: (source, { eventTemplateInput }, context) => {
      return context.prisma.eventTemplate.create({
        data: {
          ...eventTemplateInput,
          finances: {},
          tenant: {
            connect: {
              id: context.tenant.id,
            },
          },
        },
      });
    },
  }
);

export const updateTemplateMutation = mutationField('updateTemplate', {
  type: eventTemplateType,
  description: 'Update an event template',
  args: {},
});

export const deleteTemplateMutation = mutationField('deleteTemplate', {
  type: eventTemplateType,
  description: 'Delete one template by id',
  args: {
    id: nonNull(idArg()),
  },
  resolve: (source, { id }, context) =>
    context.prisma.eventTemplate.delete({ where: { id } }),
});

export const getEventQuery = queryField('eventTemplate', {
  type: eventTemplateType,
  description: 'Get one event template by ID',
  args: {
    id: nonNull(idArg()),
  },
  resolve: (source, { id }, context) =>
    context.prisma.eventTemplate.findUnique({ where: { id } }),
});