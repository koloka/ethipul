const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const dbc = require('../../connect');

// User Model
// const User = require('../../models/User');

// @route   POST api/auth
// @desc    Auth user
// @access  Public
router.post('/', (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if(!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }
  let sql = 'SELECT * FROM user WHERE email="'+email+'"';
  dbc.query(sql, function (err, result) {
    if(err) throw err;
    bcrypt.compare(password, result[0].password)
      .then(isMatch => {
        console.log(isMatch);
        if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        jwt.sign(
          { username: result[0].username },
          config.get('jwtSecret'),
          { expiresIn: 3600 },
          (err, token) => {
            if(err) throw err;
            res.json({
              token,
              user: {
                username: result[0].username,
                name: result[0].username,
                email: result[0].email
              }
            });
          }
        )
      });
  });
});

// @route   GET api/auth/user
// @desc    Get user data
// @access  Private
router.get('/user', auth, (req, res) => {
  console.log(req.user);
  let sql = "SELECT * FROM user WHERE username='"+req.user.username+"'";
  dbc.query(sql, function (err, result) {
    if(err) throw err;
    res.json(result[0]);
  });
});

module.exports = router;
