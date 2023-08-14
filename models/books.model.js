const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  imageUrl: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true },
  ratings: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
    grade: { type: Number, required: true, min: 1, max: 5 }
  }],
  averageRating: { type: Number }
}, { versionKey: false });


module.exports = mongoose.model('Books', BooksSchema)