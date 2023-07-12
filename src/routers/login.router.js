const { Router } = require('express');
const bodyParser = require('body-parser')
const loginController = require('../controllers/login.controller');
const router = Router();

/* router.post('/', bodyParser.json(), loginController.login); */
router.post('/', loginController.login);

module.exports = router;