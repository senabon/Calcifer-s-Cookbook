const Recipes = require("../models/recipeModel")
const seedData = require('./foodRecipes.json');


Recipes.deleteMany({})
    .then(()=>{
        return Recipes.insertMany(seedData);
    })
    .then(console.log)
    .catch(console.error)
    .finally(()=>{
        process.exit();
    })