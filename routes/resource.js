var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var organisation_controller = require('../controllers/organisation');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume. 
router.post('/organisation', organisation_controller.organisation_create_post);
// DELETE request to delete Costume.
router.delete('/organisation/:id', organisation_controller.organisation_delete);
// PUT request to update Costume.
router.put('/organisation/:id', organisation_controller.organisation_update_put);
// GET request for one Costume.
router.get('/organisation/:id', organisation_controller.organisation_detail);
// GET request for list of all Costume items.
router.get('/organisation', organisation_controller.organisation_list);
module.exports = router;
