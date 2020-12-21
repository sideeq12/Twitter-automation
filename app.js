const { Server } = require("http");
const https = require("https");
const unirest = require("unirest");

unirest
  .post('http://mockbin.com/request')
  .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
  .send({ "parameter": 23, "foo": "bar" })
  .then((response) => {
    console.log(response.body)
  })

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


