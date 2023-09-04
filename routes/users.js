const router = require('express').Router();

const usersController = require('../controllers/userController');

router.route('/').get((req, res) => res.json("hello World"));
router.route('/users').post((req, res) => usersController.createUser(req, res));
router.route('/users').get((req, res) => usersController.getAllUsers(req, res));
router.route('/users/:id').delete((req, res) => usersController.deleteUser(req, res));

module.exports = router;