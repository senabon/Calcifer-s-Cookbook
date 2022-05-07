const mongoose = require('../db/connection')


const RecipeSchema = new mongoose.Schema ({
    img: String,
    recipe: String,
    ingredients: Array,
    directions: Array,
}
);

const Recipe = mongoose.model("recipe", RecipeSchema);

module.exports = Recipe;

