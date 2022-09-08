const express = require('express')
const cors = require('cors')
const colors = require('colors')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const recipeRoutes = require('./routes/reciple.routes')

const app = express()

const PORT = process.env.PORT || 4000

app.use(cors())

// middleware to accept json objects (body parser)
app.use(express.json())
//middlware to convert form data to json
app.use(express.urlencoded({ extended: true }))


app.use('/api/recipes', recipeRoutes)


// Connect to the DB
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // listening to requests only when the database is connected
        app.listen(PORT, () => {
            console.log("Database connected".cyan.underline)
            console.log(`Server running at port ${PORT}`.blue.underline)
        })
    })
    .catch((err) => {
        console.log(err.message.red.underline)
    })