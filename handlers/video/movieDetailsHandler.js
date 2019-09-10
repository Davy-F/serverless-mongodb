'use strict';

const connectToDatabase = require('../../db');
const MovieDetails = require('../../models/video/movieDetails');

module.exports.create = (event, context, callback) => {
 context.callbackWaitsForEmptyEventLoop = false;
 connectToDatabase('video')
   .then(() => {
    MovieDetails.create(JSON.parse(event.body))
       .then(obj => callback(null, {
         statusCode: 200,
         body: JSON.stringify(obj)
       }))
       .catch(err => callback(null, {
         statusCode: err.statusCode || 500,
         headers: { 'Content-Type': 'text/plain' },
         body: 'Could not create the movie detail.'
       }));
   });
};
module.exports.getOne = (event, context, callback) => {
 context.callbackWaitsForEmptyEventLoop = false;
 connectToDatabase('video')
   .then(() => {
    MovieDetails.findById(event.pathParameters.id)
       .then(obj => callback(null, {
         statusCode: 200,
         body: JSON.stringify(obj)
       }))
       .catch(err => callback(null, {
         statusCode: err.statusCode || 500,
         headers: { 'Content-Type': 'text/plain' },
         body: 'Could not fetch the movie detail.'
       }));
   });
};
module.exports.getAll = (event, context, callback) => {
 context.callbackWaitsForEmptyEventLoop = false;
 connectToDatabase('video')
   .then(() => {
    MovieDetails.find()
       .then(obj => callback(null, {
         statusCode: 200,
         body: JSON.stringify(obj)
       }))
       .catch(err => callback(null, {
         statusCode: err.statusCode || 500,
         headers: { 'Content-Type': 'text/plain' },
         body: 'Could not fetch the movie details.'
       }))
   });
};
module.exports.update = (event, context, callback) => {
 context.callbackWaitsForEmptyEventLoop = false;
 connectToDatabase('video')
   .then(() => {
     MovieDetails.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), { new: true })
       .then(obj => callback(null, {
         statusCode: 200,
         body: JSON.stringify(obj)
       }))
       .catch(err => callback(null, {
         statusCode: err.statusCode || 500,
         headers: { 'Content-Type': 'text/plain' },
         body: 'Could not update the movie details.'
       }));
   });
};
module.exports.delete = (event, context, callback) => {
 context.callbackWaitsForEmptyEventLoop = false;
 connectToDatabase('video')
   .then(() => {
     MovieDetails.findByIdAndRemove(event.pathParameters.id)
       .then(obj => callback(null, {
         statusCode: 200,
         body: JSON.stringify({ message: 'Removed movie detail with id: ' + obj._id, movieDetail: obj })
       }))
       .catch(err => callback(null, {
         statusCode: err.statusCode || 500,
         headers: { 'Content-Type': 'text/plain' },
         body: 'Could not delete the movie detail.'
       }));
   });
};