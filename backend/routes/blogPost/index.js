import express from 'express'

const router = express.Router();
import BlogPostModel from '../../models/BlogPost.js'
/*

    GET /blogPosts => returns the list of blogPosts
    GET /blogPosts /123 => returns a single blogPost

    PUT /blogPosts /123 => edit the blogPost with the given id
    DELETE /blogPosts /123 => delete the blogPost with the given id
 */
//POST /blogPosts => create a new blogPost
router.post('/', async (req, res) => {

    let blogPostDoc = new BlogPostModel(req.body)
    let blogPost = await blogPostDoc.save(e => res.send({error: e}))
    res.send(blogPost)
})
router.get('/', (req, res) => {

})
router.get('/:id', (req, res) => {

})
router.put('/:id', (req, res) => {

})
router.delete('/:id', (req, res) => {

})

export default router

