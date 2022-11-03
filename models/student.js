const mongoose = require('mongoose');


const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true},
    class: {type: Number, required: true, min:1, max:12},
    mark: {type: Number, required: true,  min:0, max:100},
    address: {type: Object, required: false}
}); 


const student = mongoose.model('Students', StudentSchema);  

 module.exports = student;  