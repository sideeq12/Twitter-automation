const { Server } = require("http");
const https = require("https");
const Twitter = require("twitter")
require("dotenv").config();



var client = new Twitter({
    consumer_key: process.env.API,
    consumer_secret: process.env.Secret,
    bearer_token: process.env.Bearer
  });
  client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
    if(error) console.log(error)
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
  });



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


