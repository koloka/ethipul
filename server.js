const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const dbc = require('./connect.js');
const app = express();
const fileUpload = require('express-fileupload');


// Bodyparser Middleware
app.use(express.json());
app.use(fileUpload());


app.get('/mysql', (req, res) => {
  let sql = 'SELECT * FROM sale';
  let query = dbc.query(sql, (err, results) => {
    if(err) throw err;
    console.log(results);
    res.send('Sales fetched...');
  });
});



// DB Config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
  .connect(db, { 
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.post('/hello', (req, res) => {
  let sampleFile = req.files.sampleFile;
  let now = new Date().getTime();
  let uploadPath = './client/public/img/' + String(now)+ '_' + String(sampleFile.name);
  sampleFile.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
  });
  res.json({title:now});
});

// Use Routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/books', require('./routes/api/books'));
app.use(express.static(path.join(__dirname, 'public')));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder;
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
