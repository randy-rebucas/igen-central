var express = require('express');
var router = express.Router();
/**
 * load controller
 */
 const indexController = require('../controllers/index');
/* GET home page. */
router.get('', indexController.get);

module.exports = router;
