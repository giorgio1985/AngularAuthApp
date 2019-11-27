var express = require('express');
var router = express.Router();

var registers = require('./registers.routes');
router.use('/registers', registers);

module.exports = router;