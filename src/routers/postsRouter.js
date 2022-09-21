const express = require('express')
const router = express.Router()

const { createPostValidation, updatePostValidation } = require('../middleware/validation')
const {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
} = require('../controllers/postController')

router
    .get('/', getPosts)

    .get('/:id', getPostById)

    .post('/', createPostValidation, createPost)

    .put('/:id', updatePostValidation, updatePost)

    .delete('/:id', deletePost)

module.exports = { router }
