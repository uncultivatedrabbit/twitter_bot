console.log("The bot is starting...");

const Twit = require ("twit");
//requires twitter config information, eg consumer key, access tokens from config.js
const config = require("./config");
const tweetIt = require("./tweetStack")
// console.log(tweetIt.tweetStack.length)
const T = new Twit(config);
const day = 86400000;

launchTweets();
let interval = setInterval(launchTweets, 5000)
console.log(tweetIt.tweetStack.length)

function launchTweets(){
  if (tweetIt.tweetStack.length === 0){
    clearInterval(interval);
    console.log("There's nothing left to tweet");
    } else {
    let randomize = Math.floor(Math.random()* tweetIt.tweetStack.length);
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
    

    tweetIt.tweetStack.splice(randomize, 1);
  }

}














