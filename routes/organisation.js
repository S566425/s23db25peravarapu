var express = require('express');
var organisation_controlers= require('../controllers/organisation');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
/* GET organisations */
router.get('/', organisation_controlers.organisation_view_all_Page );

// GET request for one organisation.
router.get('/organisations/:id', organisation_controlers.organisation_detail);

/* GET detail organisation page */
router.get('/detail', organisation_controlers.organisation_view_one_Page);

/* GET create organisation page */
router.get('/create',secured,organisation_controlers.organisation_create_Page);

/* GET create update page */
router.get('/update',secured,organisation_controlers.organisation_update_Page);

/* GET delete organisation page */
router.get('/delete',secured, organisation_controlers.organisation_delete_Page);
module.exports = router
