

const createProfile = async (req, res) => {
  res.send('create Profile');
}

const getProfile = async (req, res) => {
  res.send('get Profile');
}

const getAllProfiles = async (req, res) => {
  res.send('get all Profiles');
}

const deleteProfile = async (req, res) => {
  res.send('delete Profile');
}

const updateProfile = async (req, res) => {
  res.send('update Profile');
}

const searchProfile = async (req, res) => {
  res.send('search Profile');
}

module.exports = { createProfile, getProfile, getAllProfiles, deleteProfile, updateProfile, searchProfile };