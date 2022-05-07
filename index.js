const express = require('express')
const ejsLayout = require('express-ejs-layouts')
const cors = require('cors')
const app = express()
const methodOverride = require('method-override');

const foodController = require('./controllers/foodController')

app.set('view engine', 'ejs')
app.use(ejsLayout);

app.use(express.urlencoded({extended:true}))
app.use(express.json());


app.use(methodOverride('_method'));
app.use(cors())
//*check this method (error for method-override is coming up)

app.use(foodController);

app.set('views', 'views')
app.use(express.static('frontend'))

app.set("port", process.env.PORT || 8888)

app.listen(app.get("port"), ()=>{
    console.log(`PORT:${app.get('port')}`);
})