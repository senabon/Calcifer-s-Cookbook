require('dotenv').config()

const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://sendiaz:Missgoober13!@cluster0.idhbj.mongodb.net/studioGhibliRecipe?retryWrites=true&w=majority'

const mongoURI =
    process.env.NODE_ENV ==='production'
    ? process.env.DB_URL
    : connectionString

// heroku config:set NODE_ENV=production 
// heroku config 

mongoose
    .connect(mongoURI)
    .then((instance)=>
        console.log('Connected to db'))
        .catch((error)=>console.log(`connection failed!:${error}`))



module.exports = mongoose;
