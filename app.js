const express = require("express");
const path = require("path");
require('dotenv').config();
// Initiate the express server
const app = express();

// Connect to the MongoDB database
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://henry:henrylvgpassword@levieuxgrimoire.fkn2cej.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Successfully connected to MongoDB !'))
  .catch(() => console.log('Failed to connect to MongoDB'));

const usersRoutes = require('./routes/users.routes');
const booksRoutes = require('./routes/books.routes');
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
})
app.use("/api/auth", usersRoutes);
app.use("/api/books", booksRoutes);


module.exports = app; 