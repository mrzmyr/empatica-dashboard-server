const path = require('path');

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
  let empaticaApi = new EmpaticaApi({
    username,
    password,
    jar: path.join(__dirname, '..', 'sessions', `${token}.json`)
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
