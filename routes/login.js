const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const EmpaticaApi = require('empatica-api');
const uuid = require('uuid/v4');

module.exports = (req, res, next) => {
  let username = req.body['username'];
  let password = req.body['password'];

  if(!username || !password) {
    return res.status(422).json({
      success: false,
      message: 'expected username and password'
    })
  }

  let token = uuid();
  let sessionsPath = path.join(__dirname, '..', 'sessions');
  let cookieSessionPath = path.join(sessionsPath, `${token}.json`);

  if(!fs.existsSync(sessionsPath)) {
    mkdirp.sync(sessionsPath)
  }

  let empaticaApi = new EmpaticaApi({
    username,
    password,
    jar: cookieSessionPath
  })

  empaticaApi
    .authenticate()
    .then(resp => {
      return res.status(200).json({
        success: true,
        message: 'authentication successful',
        token,
        userId: resp.userId
      })
    })
    .catch(err => {
      console.log(err);
      return res.status(401).json({
        success: false,
        message: 'authentication failed'
      })
    })
}
