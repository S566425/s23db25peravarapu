var express = require('express');
const organisation_controlers= require('../controllers/organisation');
var router = express.Router();
/* GET organisations */
router.get('/', organisation_controlers.organisation_view_all_Page );

// GET request for one organisation.
router.get('/organisations/:id', organisation_controlers.organisation_detail);

module.exports = router
