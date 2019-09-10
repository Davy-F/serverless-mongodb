'use strict';

const connectToDatabase = require('../../db');
const Reviews = require('../../models/video/reviews');

module.exports.create = (event, context, callback) => {
 context.callbackWaitsForEmptyEventLoop = false;
 connectToDatabase('video')
   .then(() => {
    Reviews.create(JSON.parse(event.body))
       .then(review => callback(null, {
         statusCode: 200,
         body: JSON.stringify(review)
       }))
       .catch(err => callback(null, {
         statusCode: err.statusCode || 500,
         headers: { 'Content-Type': 'text/plain' },
         body: 'Could not create the review.'
       }));
   });
};
module.exports.getOne = (event, context, callback) => {
 context.callbackWaitsForEmptyEventLoop = false;
 connectToDatabase('video')
   .then(() => {
     Reviews.findById(event.pathParameters.id)
       .then(review => callback(null, {
         statusCode: 200,
         body: JSON.stringify(review)
       }))
       .catch(err => callback(null, {
         statusCode: err.statusCode || 500,
         headers: { 'Content-Type': 'text/plain' },
         body: 'Could not fetch the review.'
       }));
   });
};
module.exports.getAll = (event, context, callback) => {
 context.callbackWaitsForEmptyEventLoop = false;
 connectToDatabase('video')
   .then(() => {
     Reviews.find()
       .then(reviews => callback(null, {
         statusCode: 200,
         body: JSON.stringify(reviews)
       }))
       .catch(err => callback(null, {
         statusCode: err.statusCode || 500,
         headers: { 'Content-Type': 'text/plain' },
         body: 'Could not fetch the reviews.'
       }))
   });
};
module.exports.update = (event, context, callback) => {
 context.callbackWaitsForEmptyEventLoop = false;
 connectToDatabase('video')
   .then(() => {
     Reviews.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), { new: true })
       .then(review => callback(null, {
         statusCode: 200,
         body: JSON.stringify(review)
       }))
       .catch(err => callback(null, {
         statusCode: err.statusCode || 500,
         headers: { 'Content-Type': 'text/plain' },
         body: 'Could not update the review.'
       }));
   });
};
module.exports.delete = (event, context, callback) => {
 context.callbackWaitsForEmptyEventLoop = false;
 connectToDatabase('video')
   .then(() => {
     Reviews.findByIdAndRemove(event.pathParameters.id)
       .then(review => callback(null, {
         statusCode: 200,
         body: JSON.stringify({ message: 'Removed review with id: ' + review._id, review: review })
       }))
       .catch(err => callback(null, {
         statusCode: err.statusCode || 500,
         headers: { 'Content-Type': 'text/plain' },
         body: 'Could not delete the review.'
       }));
   });
};