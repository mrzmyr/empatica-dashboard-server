const fs = require('fs');
const path = require('path');
const moment = require('moment');

module.exports = (req, res, next) => {
  let token = null;

  if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    token = req.headers.authorization.split(' ')[1]
  }

  if(!token) {
    return res.status(403).json({
      success: false,
      message: 'token missing'
    });
  }

  let cookieSessionPath = path.join(path.resolve(__dirname), '..', `sessions`, `${token}.json`)

  if(!fs.existsSync(cookieSessionPath)) {
    return res.status(403).json({
      success: false,
      message: 'session not existent'
    });
  }

  let cookieSession = require(cookieSessionPath);

  if(moment(cookieSession['www.empatica.com']['/']['session_id']['expires']) < moment()) {
    return res.status(403).json({
      success: false,
      message: 'session expired'
    });
  }

  req.cookieSessionPath = cookieSessionPath;

  next()
}
