const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const dbc = require('../../connect.js');


// User Model
// const User = require('../../models/User');

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post('/', (req, res) => {
  const { name, email, password } = req.body;
  // Simple validation.
  if(!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }
  //check existing user

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if(err) throw err;
      // Mysql inser to table and jwt
      let sql = 'INSERT INTO user(username, email, password) VALUES("'+name+'","'+email+'", "'+hash+'")';
      dbc.query(sql, function (err, result) {
        if (err) throw err;
        jwt.sign(
          { username: name },
          config.get('jwtSecret'),
          { expiresIn: 3600 },
          (err, token) => {
            if(err) throw err;
            res.json({
              token,
              user: {
                username: name,
                name: name,
                email: email
              }
            });
          }
        )
      });
    });
  })


});

module.exports = router;
