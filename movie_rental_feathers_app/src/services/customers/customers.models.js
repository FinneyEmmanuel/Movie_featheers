const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");

const schema = Joi.object({
  _id: objectId(),
  name: Joi.string().min(5).max(50).required(),
  phone: Joi.string().min(9).max(10),
  isGold: Joi.boolean().default(false),
});
module.exports.schema = schema;
