console.log("The bot is starting...");

const Twit = require ("twit");
//requires twitter config information, eg consumer key, access tokens from config.js
const config = require("./config");
const tweetIt = require("./tweetStack")

const T = new Twit(config);
const day = 86400000;

launchTweets();
//sets tweet interval to once a day
let interval = setInterval(launchTweets, day)


function launchTweets(){

  // checks if there are any tweets left
  if (tweetIt.tweetStack.length === 0){
    clearInterval(interval);
    console.log("There's nothing left to tweet");
    } else {
      // randomizes the tweets
    let randomize = Math.floor(Math.random()* tweetIt.tweetStack.length);
    // tests that the tweets on interval are working
      console.log(tweetIt.tweetStack[randomize]);

    let tweet = {
      status: tweetIt.tweetStack[randomize]
    }
    
    T.post('statuses/update', tweet, tweeted)
    
    function tweeted(err, data, response) {
      if (err){
        console.log(err.message)
      } else {
        console.log("success!")
        }
      };
    
    // deletes tweet from list after it is tweeted so there are no repeats
    tweetIt.tweetStack.splice(randomize, 1);
 
  }

}














