const express = require('express');
const app = express();

app.get('/', function(req,res){// the slash is home route
    res.send('Hello World. Are you working?') //this is sent to the web page
})

app.get("/contact", function(req,res){
    res.send('Contact me at: bigdaddydre.com')
})

app.get("/about", function(req,res){
    res.send('Hello my name is LeAndre Jones. I am a web developer learning the mern stack and have had plenty of different jobs and have gained a lot of experience over the years. Nice to meet you!')
})

app.get("/hobbies", function(req,res){
    res.send("Art, Gaming, Anime, Tv-Series, Horror Movies")
})

app.listen(3000, function(){
   console.log("Server started on port 3000") // this is what is shown when the server is running.
});

//USE NODEMON IT IS THE GOATTTTTTT!!!!!!