const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  console.log(req.user);
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
  const { username } = req.body;
  const password = req.user;
  const newUser = new User({username, password });

  newUser.save((err, savedUser) => {
    if (err) {
      res.status(422).json(err);
      return;
    }
    res.json(savedUser);
  });
};

module.exports = {
  createUser
};
