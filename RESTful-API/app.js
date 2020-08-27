const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const wikiSchema = {
  title: String,
  content: String
};

const articles = mongoose.model("Article", wikiSchema);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected!");
});

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.route("/articles")
  .get(function(req, res){
    articles.find({}, function(err, found){
      if (!err) {
        res.send(found);
      } else {
        res.send(err);
      }
    });
  })
  .post(function(req, res){
    const article = new articles({
      title: req.body.title,
      content: req.body.content
    });

    article.save(function(err){
      if (!err) {
        res.send("Successfully Added!");
      } else {
        res.send(err);
      }
    });
  })
  .delete(function(req, res){
    articles.deleteMany({}, function(err){
      if (!err) {
        res.send("Successfully deleted.");
      } else {
        res.send(err);
      }
    });
  });

app.route("/articles/:name")
  .get(function(req, res){
    articles.findOne({title: req.params.name}, function(err, found){
      if (!err) {
        res.send(found);
      } else {
        res.send(err);
      }
    });
  })
  .delete(function(req, res){
    articles.deleteOne({title:req.params.name}, function(err, found){
      if(!err) {
        res.send("Successfully deleted.");
      } else {
        res.send(err);
      }
    });
  })
  .put(function(req, res){
    articles.update({ title: req.params.name },
      { title: req.body.title,
        content: req.body.content },
      { overwrite: true },
      function(err, results){
        if (!err) {
          res.send("Successfully updated.");
        } else {
          res.send(err);
        }
      })
  })
  .patch(function(req, res){
    articles.update({ title: req.params.name },
       { $set: req.body },
       function(err, results) {
         if (!err) {
           res.send("Successfully updated.");
         } else {
           res.send(err);
         }
       }
    )
  })

app.listen(8888, function(){
  console.log("Server started on Port 8888.");
});
