var organisation = require('../models/organisation');
// List of all Costumes
exports.organisation_list = function(req, res) {
 res.send('NOT IMPLEMENTED: organisation list');
};
// for a specific Costume.
exports.organisation_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: organisation detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.organisation_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: organisation create POST');
};
// Handle Costume delete form on DELETE.
exports.organisation_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: organisation delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.organisation_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: organisation update PUT' + req.params.id);
}