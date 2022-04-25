const express = require('express')
const methodOverride = require('method-ovverride')
const foodController = require('./controllers/foodController')
require('ejs')

const app = express()

app.use(express.static('frontend'))
//app.use(express.static(__dirname + '/' + 'public'));
app.use(methodeOverride('_method'))

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')

app.use(foodController);

app.listen(8888, ()=>{
    console.log('app running');
})