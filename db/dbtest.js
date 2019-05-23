
require('dotenv').config();
// const mongoose = require('mongoose');


// const db = mongoose.connection;
// mongoose.connect(dbURI, {useNewUrlParser: true});

const mongodb = require('mongodb');
let uri = *******;

mongodb.MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client){
  if (err) throw err;

  let random = Math.floor(Math.random() * 300)
  console.log(random)
  let db = client.db('heroku_l1ppprhd');
  let tweetTest = db.collection('tweets');

  tweetTest.find().toArray(function (err, docs) {

    if(err) throw err;

    docs.forEach(function (doc) {
      console.log(doc.tweets[random]);
    });



      // Only close the connection when your app is terminating.
      client.close(function (err) {
        if(err) throw err;
      });
    });
  });
