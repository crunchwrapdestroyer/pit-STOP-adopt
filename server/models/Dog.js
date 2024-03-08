const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const dogSchema = new Schema({
  // saved book id from petfinder
  dogId: {
    type: String,
    required: true    
  }, 
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

module.exports = dogSchema;
