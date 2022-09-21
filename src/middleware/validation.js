const Joi = require('joi')

//Put validation

const updatePostValidation = (req) => {
    return updatePostSchema.validate(req)
}

//Post validation
const createPostSchema = Joi.object({
    topic: Joi.string().alphanum().min(3).max(30).required(),
    text: Joi.string().min(5).max(30).required(),
})

const createPostValidation = (req) => {
    return createPostSchema.validate(req)
}

module.exports = {
    createPostValidation: (req, res, next) => {
        const schema = Joi.object({
            topic: Joi.string().alphanum().min(3).max(30).required(),
            text: Joi.string().min(5).max(30).required(),
        })

        const validationResult = schema.validate(req.body)
        if (validationResult.error) {
            return res.status(400).json({ message: validationResult.error.message })
        }
        next()
    },
    updatePostValidation: (req, res, next) => {
        const schema = Joi.object({
            topic: Joi.string().alphanum().min(3).max(30).required(),
            text: Joi.string().min(5).max(30).required(),
        })
        const validationResult = schema.validate(req.body)
        if (validationResult.error) {
            return res.status(400).json({ message: validationResult.error.message })
        }
        next()
    },
}
