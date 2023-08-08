const express = require('express');
require('dotenv').config();
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// const url = "postgress://localhost";
const { Client }  = require('pg');
const client = new Client({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
});
// client.connect(function(){
//     console.log("database is connected");
// });



//routing

app.post('/create_student/', function (req, res) {
    var file = require(__dirname +"/src/Student/create_student.js");
    file.main(req, res, client);
});

app.put('/update_student/', function (req, res) {
    var file = require(__dirname +"/src/Student/update_student.js");
    file.main(req, res, client);
});

app.delete('/delete_student/', function (req, res) {
    var file = require(__dirname +"/src/Student/delete_student.js");
    file.main(req, res, client);
});

app.get('/read_student/', function (req, res) {
    var file = require(__dirname +"/src/Student/read_student.js");
    file.main(req, res, client);
});

app.get('/student_list/', function (req, res) {
    var file = require(__dirname +"/src/Student/student_list.js");
    file.main(req, res, client);
});



//server
app.listen(5521, function(){
    console.log("SErver is running...");
});