const https = require("https");

let Url ="https://sv443.net/jokeapi/v2/joke/Programming,Pun,Spooky,Christmas?blacklistFlags=religious,racist,sexist"
https.get(Url, (Response)=>{
    Response.on("data", (data)=>{
        console.log(JSON.parse(data))
    })
})