const express = require('express')
const ejsLayout = require('express-ejs-layouts')
const cors = require('cors')
const app = express()
const methodOverride = require('method-override');

const foodController = require('./controllers/foodController')

app.set('view engine', 'ejs')
app.use(ejsLayout);

app.use(express.static('frontend'))

app.use(methodOverride('_method'));
app.use(cors())
//*check this method (error for method-override is coming up)

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use(foodController);

app.listen(8888, ()=>{
    console.log('app running');
})