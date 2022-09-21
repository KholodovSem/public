const express = require('express')
const router = express.Router()

router
    .get('/posts', (req, res) => {
        res.json({ posts: [] })
    })

    .post('/posts', (req, res) => {
        res.json({ books: [2] })
    })

module.exports = { router }
