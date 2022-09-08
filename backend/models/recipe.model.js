const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
    title: {
      type: String,
      required: true  
    },
    ingredients: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    }
},
{
    // adds created and last updated
    timestamps: true   
})

module.exports = mongoose.model("Recipe", recipeSchema)