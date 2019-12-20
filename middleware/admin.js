const config = require('config');
const jwt = require('jsonwebtoken');

function admin(req, res, next) {
  const token = req.header('x-auth-token');

  // Check for token
  if (!token)
    return res.status(401).json({ msg: 'No token, authorizaton denied' });

  try {
    // Verify token
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    // Add user from payload
    req.user = decoded;
    if(req.user.username === 'sambath'){
      next();
    }else{
      return res.status(401).json({ msg: 'Who The Fuq Are You. You Are Not Admin!' });
    }
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
}

module.exports = admin;
