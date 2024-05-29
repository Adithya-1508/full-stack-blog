const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();


//DIRECTING TO CREATING BLOGS
router.get('/create', blogController.blog_create_get);


// MAIN BLOG PAGE ROUTE
router.get('/', blogController.blog_index)

//POST REQUEST FOR SAVING A NEW BLOG FROM THE FORM 
router.post("/", blogController.blog_create_post);


//DISPLAYING INDIVIDUAL BLOGS ACCORDING TO ID 
router.get('/:id', blogController.blog_details);


//DELETING A PARTICULAR DATA USING ID
router.delete('/:id', blogController.blog_delete)


module.exports = router;