const { Server } = require("http");
const https = require("https");
const unirest = require("unirest");

let Url ="https://sv443.net/jokeapi/v2/joke/Programming,Pun,Spooky,Christmas?blacklistFlags=religious,racist,sexist"
const TwiterUrl = "https://api.twitter.com/1.1/statuses/update.json"
https.get(Url, (Response)=>{
    Response.on("data", (data)=>{
        let Joke = JSON.parse(data)
        let setup = Joke.setup;
        if(setup){
            console.log(setup  + " - " + Joke.delivery) 
        }else{
            console.log(Joke.joke)
        }
    })
})


