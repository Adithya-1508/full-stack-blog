const Blog = require('../models/blog')

// INDEX FILE
const blog_index = (req, res) => {
    Blog.find().sort({createdAt: -1})// descending order sorting
    .then((result) => {
        res.render('index', {title: 'All Blogs', blogs: result })
    })
    .catch((err) =>{
        console.log(err);
    })
}

//DETAILS PAGE FOR EACH BLOG
const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result) =>{
        res.render('details', {blog: result, title: 'Blog Details'});
    })
    .catch((err) => {
        console.log(err);
    });
}

// DISPLAYING CREATE PAGE
const blog_create_get = (req, res) => {
    res.render('create', {title: 'Create a new Blog'});
}

//POST REQUEST OF A NEW BLOG I:E, FILLING IN THE FORM AND FETCHING THE DATA
const blog_create_post = (req, res) => {
    //We need to get access to the data that we fill in the form...
    const blog = new Blog(req.body);
    blog.save()
    .then((result) => {
        res.redirect('/blogs');
    })
    .catch((err) => {
        console.log(err);
    })
}

// DELETING A BLOG
const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({redirect: '/blogs'})
    })
    .catch((err) =>{
        console.log(err);
    })
}


module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}