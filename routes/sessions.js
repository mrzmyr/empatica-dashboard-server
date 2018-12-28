const path = require('path');
const EmpaticaApi = require('empatica-api');

module.exports = (req, res, next) => {

  let userId = req.query.userId;

  if(!userId) {
    return res.status(422).json({
      success: false,
      message: 'user id missing'
    })
  }

  let empaticaApi = new EmpaticaApi({
    jar: req.cookieSessionPath
  })

  let promise = req.params.id ?
    empaticaApi.getSession(req.params.id) :
    empaticaApi.getSessions(userId);

  promise
    .then(resp => {
      res.status(200).json(resp)
    })
    .catch(err => {
      res.status(403).send();
    })
}
