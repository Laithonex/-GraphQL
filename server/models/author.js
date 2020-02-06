const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; // MongoDB tutoal 

const authorSchema = new Schema({ //will be atomaticly generated. 
    name: String,
    age: Number
}); 

module.exports = mongoose.model('Author', authorSchema); 