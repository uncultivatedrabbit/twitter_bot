
require('dotenv').config();
// const mongoose = require('mongoose');
let tweetStack = require('../tweetStack2');
const ObjectId = require('mongodb').ObjectID;

// const db = mongoose.connection;
// mongoose.connect(dbURI, {useNewUrlParser: true});

const mongodb = require('mongodb');
let uri = *******

mongodb.MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client){
  if (err) throw err;

  let random = Math.floor(Math.random() * 3 + 1).toString();
  console.log(random)
  let db = client.db('heroku_l1ppprhd');
  let tweetTest = db.collection('tweetTest');

  // tweetTest.insertOne(tweetStack);
 
  tweetTest.find().toArray(function (err, docs) {

    if(err) throw err;

    docs.forEach(function (doc) {
      console.log(doc.tweetStackTwo[0][random]);
    
      //  console.log(tweetTest.find({"_id": ObjectId("5ce7244adfb5572908a1b8de")}, {"tweetStackTwo": random})) 
    tweetTest.updateOne({"tweetStackTwo": random},
    
    {$pull:{"tweetStackTwo": random}});
    console.log(doc.tweetStackTwo[0]);
  
      
    });



      // Only close the connection when your app is terminating.
      client.close(function (err) {
        if(err) throw err;
      });
    });
  });
