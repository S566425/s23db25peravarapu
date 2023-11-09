const mongoose = require("mongoose")
const organisationSchema = mongoose.Schema({
course: String,
faculty: String,
section: Number
})
module.exports = mongoose.model("organisation", 
organisationSchema)