'use strict';

const connectToDatabase = require('../../db');
const Movies = require('../../models/video/movies');

module.exports.create = (event, context, callback) => {
 context.callbackWaitsForEmptyEventLoop = false;
 connectToDatabase('video')
   .then(() => {
    Movies.create(JSON.parse(event.body))
       .then(obj => callback(null, {
         statusCode: 200,
         body: JSON.stringify(obj)
       }))
       .catch(err => callback(null, {
         statusCode: err.statusCode || 500,
         headers: { 'Content-Type': 'text/plain' },
         body: 'Could not create the movie.'
       }));
   });
};
module.exports.getOne = (event, context, callback) => {
 context.callbackWaitsForEmptyEventLoop = false;
 connectToDatabase('video')
   .then(() => {
    Movies.findById(event.pathParameters.id)
       .then(obj => callback(null, {
         statusCode: 200,
         body: JSON.stringify(obj)
       }))
       .catch(err => callback(null, {
         statusCode: err.statusCode || 500,
         headers: { 'Content-Type': 'text/plain' },
         body: 'Could not fetch the movie.'
       }));
   });
};
module.exports.getAll = (event, context, callback) => {
 context.callbackWaitsForEmptyEventLoop = false;
 connectToDatabase('video')
   .then(() => {
    Movies.find()
       .then(obj => callback(null, {
         statusCode: 200,
         body: JSON.stringify(obj)
       }))
       .catch(err => callback(null, {
         statusCode: err.statusCode || 500,
         headers: { 'Content-Type': 'text/plain' },
         body: 'Could not fetch the movie.'
       }))
   });
};
module.exports.update = (event, context, callback) => {
 context.callbackWaitsForEmptyEventLoop = false;
 connectToDatabase('video')
   .then(() => {
    Movies.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), { new: true })
       .then(obj => callback(null, {
         statusCode: 200,
         body: JSON.stringify(obj)
       }))
       .catch(err => callback(null, {
         statusCode: err.statusCode || 500,
         headers: { 'Content-Type': 'text/plain' },
         body: 'Could not update the movie.'
       }));
   });
};
module.exports.delete = (event, context, callback) => {
 context.callbackWaitsForEmptyEventLoop = false;
 connectToDatabase('video')
   .then(() => {
    Movies.findByIdAndRemove(event.pathParameters.id)
       .then(obj => callback(null, {
         statusCode: 200,
         body: JSON.stringify({ message: 'Removed movie with id: ' + obj._id, movieDetail: obj })
       }))
       .catch(err => callback(null, {
         statusCode: err.statusCode || 500,
         headers: { 'Content-Type': 'text/plain' },
         body: 'Could not delete the movie.'
       }));
   });
};