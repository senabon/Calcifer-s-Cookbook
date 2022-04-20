const express = require('express')
const app = express()

const mongoURI =
    process.env.NODE.BV ==='production'
    ? process.env.DB_URL
    : 'mongodb://localhost/ghibliRecipeApp'

