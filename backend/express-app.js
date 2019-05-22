const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
const Post = require('./models/post');

// mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
mongoose.connect('mongodb+srv://ren:MDEpuKxFQU7uU84k@cluster-aws-singapore-nfsdz.mongodb.net/node-angular?retryWrites=true')
    .then(()=>{
        console.log("Connected to Mongo Database");
    })
    .catch(()=>{
        console.log("Connection failed!!!");
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    next();
});

app.get("/data", (req, res, next) => {
    res.send({ content: 'Data from Node' });
    res.status(200);
});

app.post("/data", (req, res, next) => {
    const post = new Post({ content: req.body.content });
    console.log(post);
    post.save();
    res.send(post);
    res.status(200);
});

module.exports = app;