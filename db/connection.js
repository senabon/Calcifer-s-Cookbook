const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://sendiaz:Missgoober13!@cluster0.idhbj.mongodb.net/studioGhibliRecipe?retryWrites=true&w=majority'

const mongoURI =
    process.env.NODE_ENV ==='production'
    ? process.env.DB_URL
    : connectionString

mongoose
    .connect(mongoURI)
    .then((instance)=>
        console.log('Connected to db'))
        .catch((error)=>console.log(`connection failed!:${error}`))

module.exports = mongoose;
