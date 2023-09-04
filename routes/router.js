const router = require('express').Router();

//Users router
const usersRouter = require('./users');

router.use('/', usersRouter);

module.exports = router;