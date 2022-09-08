const express = require('express')
const { createRecipe, getRecipes, deleteRecipe } = require('../controllers/recipe.controller')

const router = express.Router()

// ROUTES

// get all recipes
router.get('/', getRecipes)

// create a recipe
router.post('/', createRecipe)

// delete a recipe
router.delete('/:id', deleteRecipe)


module.exports = router