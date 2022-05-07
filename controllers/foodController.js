const express = require('express');
const Recipe = require('../models/recipeModel'); //// model for recipes
//const foodController = require('../db/foodRecipes.json')

const router = express.Router();

// //grabs information for bento box recipe 
// router.get("/myneighbourtotoro", (req, res)=>{
//     res.render("views/index", {
//         img:foodController[1].img,
//         title: foodController[1].title,
//         ingredietnts: foodController[1].ingredients,
//         directions: foodController[1].directions
//     })
// })

// //graps information for bacon and eggs recipe 
// router.get("/howlsmovingcastle", (req, res)=>{
//     res.render("views/index", {
//         img:foodController[0].img,
//         title: foodController[0].title,
//         ingredietnts: foodController[0].ingredients,
//         directions: foodController[0].directions
//     })
// })

// //ramen recipe 

// router.get("/ponyo", (req, res)=>{
//     res.render("views/index", {
//         img:foodController[2].img,
//         title: foodController[2].title,
//         ingredietnts: foodController[2].ingredients,
//         directions: foodController[2].directions
//     })
// })

// // okayu recipe
// router.get("/princesmononoke", (req, res)=>{
//     res.render("views/index", {
//         img:foodController[3].img,
//         title: foodController[3].title,
//         ingredietnts: foodController[3].ingredients,
//         directions: foodController[3].directions
//     })
// })

// //herring 
// router.get("/kikisdeliveryservice", (req, res)=>{
//     res.render("views/index", {
//         img:foodController[4].img,
//         title: foodController[4].title,
//         ingredietnts: foodController[4].ingredients,
//         directions: foodController[4].directions
//     })
// })

// //onigiri
// router.get("/spiritedaway", (req, res)=>{
//     res.render("views/index", {
//         img:foodController[4].img,
//         title: foodController[4].title,
//         ingredietnts: foodController[4].ingredients,
//         directions: foodController[4].directions
//     })
// })

//all recipes
router.get('/', (req, res)=>{
    Recipe.find({})
    .then((items)=> res.render('index', {stuff: items}))
    .catch((error)=>console.log(`route failed!:${error}`))
});


router.get('/index', (req, res)=>{
    Recipe.find({})
    .then((recipes)=>{
        res.render('edit', recipes)
    })
    .catch((error)=>console.log(`route failed!:${error}`))
})

//creates a new recipe                             -----create------
//redirect


router.get('/new', (req,res)=>{
    console.log("new route");
    res.render('new')
})


//creates and returns
router.post('/add', (req, res)=>{
    Recipe.create(req.body)
        .then(()=>res.redirect('/'))
        .catch((error)=>console.log(`route failed!:${error}`))
})


//deletes recipes                                   -----delete-----
router.delete("/:id", (req, res)=>{
    Recipe.findOneAndRemove({_id: req.params.id}, req.body)
        .then((items)=> res.redirect('/index')) /////check this line
        .catch((error)=>console.log(`route failed!:${error}`))
})

//updates added recipes                                        ------update------
router.put("/:id", (req, res)=>{
    Recipe.findOneAndUpdate({_id: req.params.id}, req.body)
        .then((items)=> res.redirect('/index'))
        .catch((error)=>console.log(`route failed!:${error}`))
})

router.get("/:id", (req, res)=>{
    Recipe.findById({_id: req.params.id})
    .then(items=>{
        res.render('edit', items)
    })
    .catch((error)=>console.log(`route failed!:${error}`))
})


module.exports = router;