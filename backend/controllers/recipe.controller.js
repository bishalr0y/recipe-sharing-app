const mongoose = require('mongoose')
const Recipe = require('../models/recipe.model')

//  creating a recipe
const createRecipe = async (req, res) => {
    const {title, ingredients, calories} = req.body

    const emptyFields = []

    if(!title) {
        emptyFields.push(title)
    }
    if(!ingredients) {
        emptyFields.push(ingredients)
    }
    if(!calories) {
        emptyFields.push(calories)
    }

    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill all the fields'})
    }

    try {
        const recipe = await Recipe.create({
            title: title,
            ingredients: ingredients,
            calories: calories
        })
        res.status(200).json(recipe)
    } catch(error) {
        res.status(400).json( {error: error.message} )
    }
}

const getRecipes = async(req, res) => {
    try {
        const recipes = await Recipe.find()
        res.status(200).json(recipes)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteRecipe = async(req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such recipe'})
    }

     try {
        const recipe = await Recipe.findByIdAndDelete(id)
        
        if(!recipe) {
            return res.status(400).json({msg: "Recipe not found"})
        }
        res.status(200).json(recipe)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    createRecipe,
    getRecipes,
    deleteRecipe
}