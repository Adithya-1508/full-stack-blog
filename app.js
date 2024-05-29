const express = require('express');
const morgan = require('morgan');
const blogRoutes = require('./routes/blogRoutes');
const mongoose = require('mongoose');
const app = express();

//CONNECTING TO MONGO DATABASE
const dbURI = 'mongodb+srv://adithya:15Adithya@nodetuts.cr83mvc.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=nodetuts';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000, () => {
        console.log("Listening on port 3000");
    }))
    .catch((err) => console.log(err));

//REGISTER VIEW ENGINE 
app.set('view engine' , 'ejs');


//PASSES THE FORM DATA INTO A URL TO GAIN ACCESS TO THE DATA
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));


//REDIRECTING TO BLOGS PAGE
app.get("/", (req, res) => {
    res.redirect('/blogs');
});


//DIRECTING TO ABOUT PAGE
app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});


//BLOG ROUTES
app.use('/blogs',blogRoutes);

//404 ERROR PAGE
app.use((req,res) => {
    res.status(404).render('404', {title: 'Error'});
});


