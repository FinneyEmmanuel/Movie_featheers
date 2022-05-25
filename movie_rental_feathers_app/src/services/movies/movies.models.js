const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");

const schema = Joi.object({
  _id: objectId(),
  title: Joi.string().min(5).max(255).required(),
  genreId: objectId().required(),
  dailyRentalRate: Joi.number().min(0).max(255).required(),
  numberInStock: Joi.number().min(0).max(255).required(),
});
module.exports.schema = schema;
