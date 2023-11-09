var express = require('express');
const organisation_controlers= require('../controllers/organisation');
var router = express.Router();
/* GET costumes */
router.get('/', organisation_controlers.organisation_view_all_Page );
module.exports = router