const {validator, profileModel, connectDb} = require('../model/profileSchema');

// this creates a user profile 
const createProfile = async (req, res) => {

  const {error, value} = validator.validate(req.body);
  if(error){
    res.status(400).send(error);
    return;
  }
  try {
    const profile = new profileModel(value);
    const resp = await profile.save();
    res.send(resp);
  } catch(err) {
    res.send(err);
  }

}

//this gets a user based on supplied id
const getProfile = async (req, res) => {

  const id = req.params.id;
  try {
    const resp = await profileModel.find({"_id": id});
    if(resp.length < 1) {
      res.send('no user found');
      return;
    }
    res.send(resp);
  } catch(err) {
    res.send(err);
  }
}

//this gets all the users 
const getAllProfiles = async (req, res) => {

  try{
    const resp = await profileModel.find();
    if(resp.length < 1) {
      res.send('no users');
      return ;
    }
    res.send(resp);
  }catch(err) {
    res.send(err);
  }

}

//this deletes a user using an id
const deleteProfile = async (req, res) => {

  const id = req.params.id;
  try {
    const resp = await profileModel.deleteOne({"_id": id});
    console.log(resp);
    if(resp.deletedCount === 1) {
      res.send('deleted');
      return;
    }
    res.send('user does not exist');
  }catch(err) {
    res.send(err);
  }

}

//this updates user data
const updateProfile = async (req, res) => {

  const id = req.params.id;
  const {error, value} = validator.validate(req.body);
  if(error) {
    res.status(400).send(error);
    return;
  }
  try{
    const resp = await profileModel.findByIdAndUpdate(id, value);
    console.log(resp);
    res.send(resp);

  } catch(err) {
    res.send(err);
  }
}

//this searches a profile based on a key and value
const searchProfile = async (req, res) => {

  const {key, value} = req.queryParam;
  let resp;
  try {
    if(key === 'firstName') {
      resp = await profileModel.find({firstName: value});
    }else if(key === 'lastName') {
      resp = await profileModel.find({lastName: value});
    }
    res.send(resp);
    res.send('search Profile');
  } catch(err) {
    res.send(err);
  }
}

module.exports = { createProfile, getProfile, getAllProfiles, deleteProfile, updateProfile, searchProfile };