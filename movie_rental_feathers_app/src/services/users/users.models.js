const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");

const schema = Joi.object({
  _id: objectId(),
  name: Joi.string().min(5).max(50).required(),
  email: Joi.string().min(1).max(100).email().required(),
  password: Joi.string().min(5).max(255).required(),
  isAdmin: Joi.boolean().default(false),
});
module.exports.schema = schema;
