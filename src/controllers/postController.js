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

const getPosts = (req, res) => {
    res.status(200)
    res.json({ posts, message: 'success' })
}

const getPostById = (req, res) => {
    const id = req.params.id
    const post = posts.find((post) => post.id === id)
    console.log(post)

    if (!post) {
        return res.status(400).json({ message: `Post with id ${id} not found!` })
    }

    res.status(200)
    res.json({ post, message: 'success' })
}

const createPost = (req, res) => {
    const newPost = req.body
    posts.push(newPost)

    res.status(201)
    res.json({ newPost, message: 'post successfully created' })
}

const updatePost = (req, res) => {
    const { topic, text } = req.body
    const id = req.params.id

    posts.forEach((post) => {
        if (post.id === id) {
            post.topic = topic || post.topic
            post.text = text || post.text
        }
    })
    const newPost = posts.find((post) => post.id === id)

    if (!newPost) {
        return res.status(400).json({ message: `Post with id ${id} not found!` })
    }

    res.status(200)
    res.json({ newPost, message: 'post successfully updated' })
}

const deletePost = (req, res) => {
    const id = req.params.id

    const deletedPost = posts.slice(id, 1)
    console.log(deletedPost)

    if (deletedPost.length < 1) {
        return res.status(400).json({ message: `Post with id ${id} not found!` })
    }

    res.status(200)
    res.json({ deletedPost, message: 'post successfully deleted' })
}

module.exports = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
}
