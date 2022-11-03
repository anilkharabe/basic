const express =  require('express');
    const mongoose = require('mongoose');
    const app = express();

    mongoose.connect('mongodb://localhost:27017/MyDB' )   
    .then((result)=>{
        console.log("connection established");
    })
    .catch((err)=>{
        console.log("getting error", err);  
    })


//middleware by express
app.use(express.json());


const student_route = require('./route/student');

app.use('/students', student_route);

var  port = 3016;   
app.listen(port,()=>{
    console.log("app running on port "+ port);  
})

