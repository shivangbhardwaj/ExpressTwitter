const express = require('express')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const sconnect = require('./connection.js')
const app = express()

var schemaname = new Schema({
    tweet: String,
    time: Number
}, {
        collection: 'twitter'
    });
var Moden = mongoose.model('Moden', schemaname);


    mongoose.connect('mongodb://localhost:27017/twitterdb');
//To display the login page ie first page

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})


//to get the validation done
app.get('/check/user/pass', function (req, res) {
    var url = "mongodb://localhost/twitterdb";
    var name = req.query.user;
    var pass = req.query.pass;

    sconnect(url, name, pass, req, res);

})

app.get('/tweet', function (req, res) {

    var msg = req.query.tamma;


    var savedata = new Moden({
        'tweet': msg,
        'time': Math.floor(Date.now() / 1000) // Time of save the data in unix timestamp format
    }).save(function (err, result) {
        if (err) throw err;

        if (result) {
            
        }
    })
    res.sendFile(__dirname + "/tweet.html");


});
app.get('/frame', (req, res) => {
    var twet="";

    Moden.find({
    }, function (err, result) {
        if (err) {
            throw err;
        }
        else {
            for (var i = 0; i < result.length; i++) {

                twet = twet + result[i].name +  " : " + result[i].tweet +"<br>";

            }
            res.send(twet);
        }
    })
    
});

app.listen(3000, function () {
    console.log('Successfully started express application!')
  })




