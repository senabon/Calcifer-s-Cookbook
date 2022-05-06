const express = require('express');
const Recipe = require('../models/recipeModel'); //// model for recipes
//const foodController = require('../db/foodRecipes.json')

const router = express.Router();

//all recipes
router.get('/index', (req, res)=>{
    Recipe.find({})
    .then((items)=> res.render('index', {stuff: items}))
});


//grabs information for bento box recipe 
router.get("/myneighbourtotoro", (req, res)=>{
    res.render("views/index", {
        img:foodController[1].img,
        title: foodController[1].title,
        ingredietnts: foodController[1].ingredients,
        directions: foodController[1].directions
    })
})

//graps information for bacon and eggs recipe 
router.get("/howlsmovingcastle", (req, res)=>{
    res.render("views/index", {
        img:foodController[0].img,
        title: foodController[0].title,
        ingredietnts: foodController[0].ingredients,
        directions: foodController[0].directions
    })
})

//ramen recipe 

router.get("/ponyo", (req, res)=>{
    res.render("views/index", {
        img:foodController[2].img,
        title: foodController[2].title,
        ingredietnts: foodController[2].ingredients,
        directions: foodController[2].directions
    })
})

// okayu recipe
router.get("/princesmononoke", (req, res)=>{
    res.render("views/index", {
        img:foodController[3].img,
        title: foodController[3].title,
        ingredietnts: foodController[3].ingredients,
        directions: foodController[3].directions
    })
})

//herring 
router.get("/kikisdeliveryservice", (req, res)=>{
    res.render("views/index", {
        img:foodController[4].img,
        title: foodController[4].title,
        ingredietnts: foodController[4].ingredients,
        directions: foodController[4].directions
    })
})

//onigiri
router.get("/spiritedaway", (req, res)=>{
    res.render("views/index", {
        img:foodController[4].img,
        title: foodController[4].title,
        ingredietnts: foodController[4].ingredients,
        directions: foodController[4].directions
    })
})


//creates a new recipe                             -----create------
router.post("/add", (req, res)=>{
    Recipe.create(req.body)
        .then(()=>res.redirect('/'))
})


//deletes added recipe ***mkae sure this doesn't delete any of the previously added db recipes***           -----delete-----
router.delete("/:id", (req, res)=>{
    Recipe.findOneAndRemove({_id: req.params.id})
        .then((items)=> res.redirect('/'))
})

//updates added recipes                                                                ------update------
router.put("/:id", (req, res)=>{
    Recipe.findOneAndUpdate({_id: req.params.id}, req.body)
        .then((items)=> res.redirect('/'))
})

//displays the added recipe to the db ***display this in a seperate area or under the corresponding movie?***
router.get("/new", (req, res)=>{
    res.render('new')
})

//edits new recipe ***is this the same as update?***
router.get("/:id", (req, res)=>{
    Recipe.findById(re.params.id)
        .then(items =>{ res.render('edit', items)})
})

module.exports = router;