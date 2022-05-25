const { authenticate } = require("@feathersjs/authentication").hooks;
const validate = require("feathers-validate-joi");
const { schema } = require("../movies/movies.models");
const fetchGenre = require("./hooks/fetchGenre");
const admin = require("../../hooks/admin");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      authenticate("jwt"),
      validate.form(schema, { abortEarly: false }),
      fetchGenre(),
    ],
    update: [
      authenticate("jwt"),
      validate.form(schema, { abortEarly: false }),
      fetchGenre(),
    ],
    patch: [authenticate("jwt")],
    remove: [authenticate("jwt"), admin()],
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
