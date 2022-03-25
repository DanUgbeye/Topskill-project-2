
const router = require('express').Router();
const { 
  createProfile,
  getProfile, 
  getAllProfiles, 
  deleteProfile, 
  updateProfile, 
  searchProfile 
} = require('../controller/profileHandler');

//create a profile
router.route('/profile').post(createProfile)

//get a profile based on the id
router.route('/profile/:id').get(getProfile);

//gets all profiles
router.route('/profiles').get(getAllProfiles);

//deletes a profile
router.route('/profile/:id').delete(deleteProfile);

//updates a profile
router.route('/profile/:id').put(updateProfile);

//search for a user profile
router.route('/search').get(searchProfile);

module.exports = { router };