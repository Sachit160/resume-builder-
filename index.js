var nodemailer=require('nodemailer');
var express=require('express');

var upload = require('express-fileupload');
const http = require('http');
var session = require('express-session');
var app=express();
var bodyParser=require('body-parser');

app.use(session({secret: 'SE-Project'}));


//var indexcontroller=require('./controllers/indexcontroller');

app.use(bodyParser.urlencoded({extended:true}));
var mysql = require('mysql');
var connection =mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'qwerty123',
    database:'de'
    }
);
 connection.connect(function (a,b,c) {
     if(!!c)
     {
          console.log('errorrrr');

     }
     else
     {
         console.log('connected_db');
     }

 });

 app.set('view engine','ejs');
 app.use(express.static('./public'));
app.use(upload());
app.get('/',function (req,res) {
  res.render('form');
});
app.post('/mc',function (req,res) {
        var kc = {
        fullname : req.body.fullname,
        addressline1:req.body.addressline1,
         addressline2:req.body.addressline2,
         city:req.body.city,
         region:req.body.region,
         postalcode:req.body.postalcode,

         objective:req.body.objective,
         highschool:req.body.highschool,
         intermediate:req.body.intermediate,
         graduation:req.body.graduation,
         workexperience:req.body.workexperience,
         skill1:req.body.skill1,

         skill2:req.body.skill2,
         skill3:req.body.skill3,
         refrences:req.body.refrences,
         email:req.body.email,
         tel:req.body.tel,
         dob:req.body.dob,
         age:req.body.age,
         intersts:req.body.intersts};
      
                res.render('gen',{data:kc});
});
 //indexcontroller(app,connection);
 app.listen(3000,function () {
    console.log('connected') ;
 });