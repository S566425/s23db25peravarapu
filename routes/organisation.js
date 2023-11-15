var express = require('express');
const organisation_controlers= require('../controllers/organisation');
var router = express.Router();
/* GET organisations */
router.get('/', organisation_controlers.organisation_view_all_Page );

// GET request for one organisation.
router.get('/organisations/:id', organisation_controlers.organisation_detail);

/* GET detail organisation page */
router.get('/detail', organisation_controlers.organisation_view_one_Page);

/* GET create organisation page */
router.get('/create', organisation_controlers.organisation_create_Page);

module.exports = router
