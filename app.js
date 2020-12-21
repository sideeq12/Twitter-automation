const { Server } = require("http");
const https = require("https");
const Twitter = require("twitter-lite")
require("dotenv").config();



var client = new Twitter({
    consumer_key: process.env.API,
    consumer_secret: process.env.Secret,
    bearer_token: process.env.Bearer
  });
  client.post('statuses/update', {status: 'I Love Twitter'})
  .then(function (tweet) {
    console.log(tweet);
  })
  .catch(function (error) {
    throw error;
  })



// let Url ="https://sv443.net/jokeapi/v2/joke/Programming,Pun,Spooky,Christmas?blacklistFlags=religious,racist,sexist"
// const TwiterUrl = "https://api.twitter.com/1.1/statuses/update.json"
// https.get(Url, (Response)=>{
//     Response.on("data", (data)=>{
//         let Joke = JSON.parse(data)
//         let setup = Joke.setup;
//         if(setup){
//             console.log(setup  + " - " + Joke.delivery) 
//         }else{
//             console.log(Joke.joke)
//         }
//     })
// })


