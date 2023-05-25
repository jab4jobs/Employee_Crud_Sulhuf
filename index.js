const express = require('express');
const bd = require('body-parser');

const app = express();
const mongoose = require('mongoose');
const mongoUrl= "mongodb://localhost:27017/employees";
mongoose.connect(mongoUrl, {useNewUrlParser: true});
const con = mongoose.connection;
const Router= require("./Routes");

app.use('/employee', Router.employees);

app.use(express.json());

app.use(bd.urlencoded({ extended: false }))
app.use(bd.json())
try{
    con.on('open', ()=> {
        console.log('MongoDb Connected');
    })
} catch (err) {
    console.log("Error: " + err);
}


const port = 8000;
app.listen(port, () => {
    console.log('Server Running', port);
})