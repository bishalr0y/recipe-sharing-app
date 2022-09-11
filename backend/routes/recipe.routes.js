const express = require('express')
const { createRecipe, getRecipes, deleteRecipe } = require('../controllers/recipe.controller')
const { protect } = require('../middleware/auth.middleware')

const router = express.Router()

// ROUTES

// get all recipes
router.route('/').get(protect, getRecipes)

// create a recipe
router.route('/').post(protect, createRecipe)

// delete a recipe
router.route('/:id').delete(protect, deleteRecipe)


module.exports = router