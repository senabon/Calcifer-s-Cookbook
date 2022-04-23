const Recipes = require("..models/ingredients-models")
const seedData = require('./foodRecipes.json');


Recipes.deleteMany({})
    .then(()=>{
        return Recipes.insertMany(seedData);
    })
    .then((res)=> console.log(res))
    .catch((err)=>console.log(err))
    .finally(()=>{
        process.exit();
    })