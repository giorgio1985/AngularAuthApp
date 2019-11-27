const express = require('express');
const router = express.Router();
const cors = require('cors');
router.use(cors());

router.post('/login',(req, res) => {
var customs = req.body.customs;
console.log('yiyoyioiyoiy' + customs);
});

module.exports = router;