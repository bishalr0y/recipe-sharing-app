const express = require('express')
const cors = require('cors')
const colors = require('colors')
const recipeRoutes = require('./routes/reciple.routes')

const app = express()

const PORT = process.env.PORT || 4000

app.use(cors())

// middleware to accept json objects (body parser)
app.use(express.json())
//middlware to convert form data to json
app.use(express.urlencoded({ extended: true }))


app.use('/api/recipes', recipeRoutes)


app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`.rainbow.underline)
})
