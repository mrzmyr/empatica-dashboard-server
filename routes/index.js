const router = require('express').Router();

let sessionsRoute = require('./sessions');
let sessionDataRoute = require('./sessionData');
let loginRoute = require('./login');
let authRoute = require('./auth');

let needsToken = require('../middleware/token');

router.get('/sessions', needsToken, sessionsRoute);
router.get('/sessions/:id', needsToken, sessionsRoute);
router.get('/sessions/:id/data', needsToken, sessionDataRoute);
router.get('/auth', needsToken, authRoute);

router.post('/login', loginRoute)

module.exports = router;
