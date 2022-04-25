const express = require('express');
const Recipe = require('../db/foodRecipes');

const router = express.Router();


router.get('/', (req, res)=>{
    Recipe.find({})
    .then((items)=> res.rendder("index", {stuff: items}))
});

router.get("/myneighbourtotoro", (req, res)=>{
    res.render("views/index", {
        img:foodController[0].img
    })
})

router.post("/add", (req, res)=>{
    Recipe.create(req.body)
        .then(()=>res.redirect('/'))
})

router.delete("/:id", (req, res)=>{
    Recipe.findOneAndRemove({_id: req.params.id})
        .then((items)=> res.redirect('/'))
})

router.put("/:id", (req, res)=>{
    Recipe.findOneAndUpdate({_id: req.params.id}, req.body)
        .then((items)=> res.redirect('/'))
})

router.get("/new", (req, res)=>{
    res.render('new')
})

router.get("/:id", (req, res)=>{
    Recipe.findById(re.params.id)
        .then(items =>{ res.render('edit', items)})
})

module.exports = router;