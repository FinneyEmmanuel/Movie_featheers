const { authenticate } = require("@feathersjs/authentication").hooks;
const validate = require("feathers-validate-joi");
const Joi = require("joi");
const { schema } = require("./rentals.models");
const fetchCustomer = require("./hooks/fetchCustomer");
const fetchMovie = require("./hooks/fetchMovie");
const decreaseNumberInStock = require("./hooks/decreaseNumberInStock");
const setRentalFee = require("./hooks/setRentalFee");
const setMovie = require("./hooks/setMovie");
const increaseNumberInStock = require("./hooks/increaseNumberInStock");
const admin = require("../../hooks/admin");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      authenticate("jwt"),
      validate.form(schema, { abortEarly: false }),
      fetchCustomer(),
      fetchMovie(),
      setRentalFee(),
    ],
    update: [authenticate("jwt")],
    patch: [authenticate("jwt"), setMovie()],
    remove: [authenticate("jwt"), admin()],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [decreaseNumberInStock()],
    update: [],
    patch: [increaseNumberInStock()],
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
