const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const admin = require('../../middleware/admin');
const dbc = require('../../connect.js');
const fileUpload = require('express-fileupload');



// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  
  // let sql = "SELECT * FROM book INNER JOIN book_image ON book.book_image_id = book_image.book_image_id";
  let sql = "SELECT * FROM book";
  // let sql = "SELECT * FROM book";
  dbc.query(sql, function (err, result) {
    if(err) throw err;
    res.json(result);
  });
});
router.get('/:id', (req, res) => {
  
  // let sql = "SELECT * FROM book INNER JOIN book_image ON book.book_image_id = book_image.book_image_id";
  let sql = "SELECT * FROM book WHERE id="+req.params.id;
  // let sql = "SELECT * FROM book";
  dbc.query(sql, function (err, result) {
    if(err) throw err;
    res.json(result);
  });
});



// @route   POST api/items
// @desc    Create An Item
// @access  Private
router.post('/', admin, auth, (req, res) => {
  const { title, des, price, url } = req.body;

  // let cover = req.files.cover;
  // console.log(cover.name);
  // let now = new Date().getTime();
  // let uploadPath = './client/public/img/' + String(now)+ '_' + String(cover.name);
  // cover.mv(uploadPath, (err) => {
  //   if (err) {
  //     return res.status(500).send(err);
  //   }
  // });

  let sql = 'INSERT INTO book(title, description, price, url_cover) VALUES("'+title+'","'+des+'", "'+price+'", "'+url+'")';
  dbc.query(sql, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

router.put('/:id', admin, auth, (req, res) => {
  const { title, des, price, url } = req.body;
  let sql = 'UPDATE book SET title="'+title+'", description="'+des+'", price="'+price+'", url_cover="'+url+'" WHERE id='+req.params.id;
  dbc.query(sql, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id', admin, auth, (req, res) => {
  let sql = 'DELETE FROM book WHERE id='+req.params.id;
  dbc.query(sql, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
