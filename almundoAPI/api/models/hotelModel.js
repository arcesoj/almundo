'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HotelSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the hotel'
  },
  address: {
    type: String,
    required: 'Kindly enter the address of the hotel'
  },
  rating: {
    type: Number,
    required: 'Kindly enter the rating of the hotel'
  },
  imageUrl: {
    type: String,
    required: 'Kindly enter the image url of the hotel'
  },
  currency: {
    type: String,
    required: 'Kindly enter the currency of the hotel'
  },
  price:{
    type: Number,
    required: 'Kindly enter the price of the hotel'
  },
});

module.exports = mongoose.model('Hotel', HotelSchema);