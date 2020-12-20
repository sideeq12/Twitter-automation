const { Server } = require("http");
const https = require("https");

let Url ="https://sv443.net/jokeapi/v2/joke/Programming,Pun,Spooky,Christmas?blacklistFlags=religious,racist,sexist"
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

