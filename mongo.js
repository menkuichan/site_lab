const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DB_URL = "mongodb://localhost:27017/postsdb";

// модель
const postScheme = new Schema({
        author_id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 30
        },
        text: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 1000
        },
        pic: {
            type: String
        },
        date: {
            type: Date,
            required: true
        }
    },
    {
        versionKey: false
    });

mongoose.connect(DB_URL, {useNewUrlParser: true});
const Post = mongoose.model("Post", postScheme);

module.exports = {
    // создать пост
    createPost: function (authorId, title, text, pic) {
        Post.create({
            author_id: authorId,
            title: title,
            text: text,
            pic: pic,
            date: Date.now()
        }, function (err, post) {
            mongoose.disconnect();
            if (err) return console.log(err);
            console.log("New post created:\n", post);
        });
    },
    // получить все посты
    getAllPosts: function () {
        Post.find({}, function (err, posts) {
            mongoose.disconnect();
            if (err) return console.log(err);
            console.log(posts);
        });
    },
    // удалить все посты
    removeAllPosts: function () {
        Post.remove({}, function (err, result) {
            mongoose.disconnect();
            if (err) return console.log(err);
            console.log(result);
        });
    }
};