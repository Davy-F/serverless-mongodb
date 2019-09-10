const mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
    _id: mongoose.ObjectId,
    reviewer_id: Number,
    rating: Number,
    reviewer: String
});

// NOTE: Mongoose rudely lowercases collection name and adds an 's'
module.exports = mongoose.model('reviews', ReviewSchema);