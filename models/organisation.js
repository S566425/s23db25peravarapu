const mongoose = require("mongoose")
const organisationSchema = mongoose.Schema({
course: {
    type:String,
required:true,
match:/^[a-zA-Z]+$/
},
faculty: String,
section: {
    type: Number,
    min:1,
    max:6
}
})
module.exports = mongoose.model("organisation", 
organisationSchema)