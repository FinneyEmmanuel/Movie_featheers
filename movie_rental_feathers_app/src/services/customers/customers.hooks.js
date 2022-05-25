const { authenticate } = require("@feathersjs/authentication").hooks;
const Joi = require("joi");
const validate = require("feathers-validate-joi");
const { schema } = require("./customers.models");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate("jwt"), validate.form(schema, { abortEarly: false })],
    update: [authenticate("jwt"), validate.form(schema, { abortEarly: false })],
    patch: [authenticate("jwt"), validate.form(schema, { abortEarly: false })],
    remove: [authenticate("jwt")],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
