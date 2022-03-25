const mongoose = require('mongoose');
const Joi = require('joi');

const connectDb = async () => {
  return await mongoose.connect(process.env.DB_LINK);
} 

const validator = Joi.object({
  firstName: Joi.string().min(4).max(30).required(),
  lastName: Joi.string().min(4).max(30).required(),
});

const profileSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

const profileModel = mongoose.model('profile', profileSchema);

module.exports = { validator, profileModel, connectDb };
