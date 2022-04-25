const mongoose = require('../db/connection')


const RecipeSchema = new mongoose.Schema ({
    img: "String",
    title: "String",
    ingredients: "String",
    directions: "String",
});

const Recipe = mongoose.model("recipe", RecipeSchema);

module.exports = Recipe;

