const express = require('express')
const morgan = require('morgan')
require('dotenv').config()

const app = express()

const { router } = require('./routers/postsRouter')

const PORT = process.env.PORT

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    console.log(`Server work on adress: http://localhost:${PORT}`)
})
