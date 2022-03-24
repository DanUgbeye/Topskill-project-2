const Joi = require('joi');

const profileSchema = Joi.object({
  firstName: Joi.string().min(6).max(30).required(),
  lastName: Joi.string().min(6).max(30).required(),
})

module.exports = { profileSchema };
