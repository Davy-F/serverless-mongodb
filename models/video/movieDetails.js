const mongoose = require('mongoose');

const ImdbSchema = new mongoose.Schema({
    id: String,
    rating: Number,
    votes: Number    
});

const RottenTomatoSchema = new mongoose.Schema({
    meter: Number,
    image: String,
    rating: Number,
    reviews: Number,
    fresh: Number,
    consensus: String,
    userMeter: Number,
    userRating: Number,
    userReviews: Number
});

const AwardsSchema = new mongoose.Schema({
    wins: Number,
    nominations: Number,
    text: String
});

const MovieDetailsSchema = new mongoose.Schema({
    _id: mongoose.ObjectId,
    title: String,
    year: Number,
    rated: String,
    runtime: Number,
    countries: [String],
    genres: [String],
    director: String,
    writers: [String],
    actors: [String],
    plot: String,
    poster: String,
    imdb: ImdbSchema,
    tomato: RottenTomatoSchema,
    metacritic: Number,
    awards: AwardsSchema,
    type: String
});

// NOTE: Mongoose rudely lowercases collection name and adds an 's'
module.exports = mongoose.model('movieDetails', MovieDetailsSchema, 'movieDetails');