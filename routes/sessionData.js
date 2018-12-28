const path = require('path');
const EmpaticaApi = require('empatica-api');

module.exports = (req, res, next) => {

  let type = req.query.type;

  if(!req.params.id) {
    return res.status(422).json({
      success: false,
      message: 'session id missing'
    })
  }

  let empaticaApi = new EmpaticaApi({
    jar: req.cookieSessionPath
  })

  empaticaApi
    .getSessionData(req.params.id, type)
    .then(resp => {
      res.status(200).json(resp)
    })
    .catch(err => {
      console.log(err)
      res.status(422).json({
        success: false,
        message: err.message
      });
    })
}
