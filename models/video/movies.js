const mongoose = require('mongoose');
const MoviesSchema = new mongoose.Schema({
    _id: mongoose.ObjectId,
    title: String,
    year: Number,
    imdb: String
});

// NOTE: Mongoose rudely lowercases collection name and adds an 's'
module.exports = mongoose.model('movies', MoviesSchema, 'movies');