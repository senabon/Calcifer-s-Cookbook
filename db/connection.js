const mongoose = require('mongoose')


const mongoURI =
    process.env.NODE.BV ==='production'
    ? process.env.DB_URL
    : 'mongodb://localhost/ghibliRecipeApp'

mongoose.connect(mongoURI)

module.exports = mongoose;
