const mongoose = require('mongoose');

const FaqSchema = new mongoose.Schema({
  fruit: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  image:{
    type:String,
    default:"https://www.shutterstock.com/shutterstock/photos/2053015835/display_1500/stock-photo-orange-with-sliced-and-green-leaves-isolated-on-white-background-2053015835.jpg"
  }
});

module.exports = mongoose.model('Faq', FaqSchema);

