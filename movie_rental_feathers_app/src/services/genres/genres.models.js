const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");

const schema = Joi.object({
  _id: objectId(),
  name: Joi.string().min(5).max(50).required(),
});
module.exports.schema = schema;
