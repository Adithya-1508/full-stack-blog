const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//We are creating the schema for blog docs and assigning there properties..
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
    // This timestamps option generates the time when any changes are made
}, { timestamps: true });


const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;