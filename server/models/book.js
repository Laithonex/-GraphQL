const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; // MongoDB tutoal 

const bookSchema = new Schema({ //will be atomaticly generated. 
    name: String,
    genre: String,
    authorId: String,
}); 

module.exports = mongoose.model('Book', bookSchema); 