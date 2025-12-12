
const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: false }
})

const student = mongoose.model('student', studentSchema);
module.exports = student;