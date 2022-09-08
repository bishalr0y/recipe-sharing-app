const express = require('express')

const router = express.Router()

// ROUTES

// get all recipes
router.get('/', (req, res) => {
    res.status(200).json({ msg:'get all recipes' })
})

// create a recipe
router.post('/', (req, res) => {
    res.status(200).json({ msg:'create a recipea' })
})

// delete a recipe
router.post('/:id', (req, res) => {
    const recipeId = req.params.id
    res.status(200).json({ msg: `delete reciple with id: ${id}` })
})


module.exports = router