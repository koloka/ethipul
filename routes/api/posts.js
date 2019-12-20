const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const dbc = require('../../connect.js');


router.get('/', auth, (req, res) => {
  let sql = "SELECT * FROM todo";
  dbc.query(sql, function (err, result) {
    if(err) throw err;
    res.json(result);
  });
});

module.exports = router;
