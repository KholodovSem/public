const express = require('express')
const router = express.Router()

const posts = [
    {
        id: '1',
        topic: 'Animals',
        text: 'Some animals are very cute',
    },
    {
        id: '2',
        topic: 'Games',
        text: 'Hey guys, who playing which games?',
    },
    {
        id: '3',
        topic: 'HTML/CSS',
        text: 'Again...',
    },
]

router
    .get('/', (req, res) => {
        res.status(200)
        res.json({ posts, message: 'success' })
    })

    .get('/:id', (req, res) => {
        const id = req.params.id
        const post = posts.find((post) => post.id === id)

        res.status(200)
        res.json({ post, message: 'success' })
    })

    .post('/', (req, res) => {
        const newPost = req.body
        posts.push(newPost)

        res.status(201)
        res.json({ newPost, message: 'post successfully created' })
    })

    .put('/:id', (req, res) => {
        const { topic, text } = req.body
        const id = req.params.id

        posts.forEach((post) => {
            if (post.id === id) {
                post.topic = topic || post.topic
                post.text = text || post.text
            }
        })
        const newPost = posts.find((post) => post.id === id)

        res.status(200)
        res.json({ newPost, message: 'post successfully updated' })
    })

    .delete('/:id', (req, res) => {
        const id = req.params.id

        const deletedPost = posts.slice(id, 1)

        res.status(200)
        res.json({ deletedPost, message: 'post successfully deleted' })
    })

module.exports = { router }
