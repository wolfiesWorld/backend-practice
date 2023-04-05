// import { App } from './test';

const express = require('express');
const app = express();

app.get('/', function(request,response){
    response.send('Hello')
})
app.listen(3000, function(){
    // return alert('Hello World')
    // return(
    // <>
    // <h1>Hello World</h1>
    // </>
    // )
});