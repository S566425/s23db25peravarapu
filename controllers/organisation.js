var organisation = require('../models/organisation');
// List of all Costumes
// exports.organisation_list = function(req, res) {
// res.send('NOT IMPLEMENTED: organisation list');
// };
// for a specific Costume.
exports.organisation_detail = function(req, res) {
res.send('NOT IMPLEMENTED: organisation detail: ' + req.params.id);
};
// Handle Costume create on POST.
// exports.organisation_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: organisation create POST');
// };
// Handle Costume delete form on DELETE.
exports.organisation_delete = function(req, res) {
res.send('NOT IMPLEMENTED: organisation delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.organisation_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: organisation update PUT' + req.params.id);
};
 
// List of all Costumes
exports.organisation_list = async function(req, res) {
try{
theorganisation = await organisation.find();
res.send(theorganisation);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
 
// VIEWS
// Handle a show all view
exports.organisation_view_all_Page = async function(req, res) {
    try{
    theorganisation = await organisation.find();
    res.render('organisation', { title: 'organisation Search Results', results: theorganisation });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
   
// Handle Costume create on POST.
exports.organisation_create_post = async function(req, res) {
    console.log(req.body)
    let document = new organisation();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.course = req.body.course;
    document.faculty = req.body.faculty;
    document.section = req.body.section;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };