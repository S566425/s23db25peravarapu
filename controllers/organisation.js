var organisation = require('../models/organisation');
// List of all organisations
// exports.organisation_list = function(req, res) {
// res.send('NOT IMPLEMENTED: organisation list');
// };
// for a specific organisation.
// for a specific organisation.
exports.organisation_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await organisation.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle organisation create on POST.
// exports.organisation_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: organisation create POST');
// };
// Handle organisation delete form on DELETE.
exports.organisation_delete = function(req, res) {
res.send('NOT IMPLEMENTED: organisation delete DELETE ' + req.params.id);
};
// Handle organisation update form on PUT.


// Handle organisation update form on PUT.
exports.organisation_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await organisation.findById( req.params.id)
// Do updates of properties
if(req.body.organisation_type)
toUpdate.organisation_type = req.body.organisation_type;
if(req.body.cost) toUpdate.cost = req.body.cost;
if(req.body.size) toUpdate.size = req.body.size;

if(req.body.checkboxsale) toUpdate.sale = true;
else toUpdate.same = false;

let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};


 
// List of all organisations
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
   
// Handle organisation create on POST.
exports.organisation_create_post = async function(req, res) {
    console.log(req.body)
    let document = new organisation();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"organisation_type":"goat", "cost":12, "size":"large"}
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