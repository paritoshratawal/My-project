'use strict'

var express=require("express");
var bodyParser=require("body-Parser");
var multer=require('multer');
var app=express();
app.use(express.static("app"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
var storage=multer.diskStorage({
  destination:function(req, file, cb){
    cb(null,'/lms/uploads');
  },
  filename:function(req,file,cb){
  cb(null,file.originalname);
  }
});
var upload=multer({storage:storage}).any();

app.post("/login",function(req,res)
{
  var userid=req.body.userid;
  var pwd=req.body.pwd;
  console.log('userid:',userid+' '+'pwd:',pwd);
  var checkLogin=require("./databaseServer/logindao");
  checkLogin(userid,pwd,res);
});


/*************registration post server*******************/


app.post("/reg",function(req,respns){
console.log("In reg.post srever");
    var fname=req.body.fname;
    var lname=req.body.lname;
    var uid=req.body.uid;
    var pwd=req.body.pwd;
    var age=req.body.age;
    var dob=req.body.dob;
    var gen=req.body.gen;
    var contact=req.body.contact;
    var email=req.body.email;
    var address=req.body.address;
    var zipcode=req.body.zipcode;
    var city=req.body.city;
    var quaexp=req.body.quaexp;
    var teachsub=req.body.teachsub;
  var userData=require('./databaseServer/regDao');
  userData(fname,lname,uid,pwd,age,dob,gen,contact,email,address,zipcode,city,quaexp,teachsub,respns);
});

/****************assignment post server code**************/


app.post("/assign",function(req,res)
{
  console.log('In post.assginment server');
  var assigname=req.body.assigname;
  var batchid=req.body.batchid;
  var subname=req.body.subname;
  var course=req.body.course;
  var filename=req.body.filename;
  var assignmentUpload=require("./databaseServer/assignmentdao");
  assignmentUpload(assigname,batchid,subname,course,filename,res);
});

/****************assignment post server code**************/

app.post("/upload",upload,function(req,res)
{console.log('in upload server function');
  console.log(req.files);
  res.send('success');
});

/**********test post server code*************/

app.post("/testpro",function(req,respns){
  console.log("in reg post function");
  var testname=req.body.testname;
  var maxmarks=req.body.maxmarks;
  var passingmarks=req.body.passingmarks;
  var totaltime=req.body.totaltime;
  var negmarking=req.body.negmarking;
  var coursename=req.body.coursename;
  var testype=req.body.testtype;
  /*var examtype=req.body.examtype;
  var queno=req.body.queno;
  var question=req.body.question;
  var option1=req.body.option1;
  var option2=req.body.option2;
  var option3=req.body.option3;
  var option4=req.body.option4;
  var option5=req.body.option5;
  var option6=req.body.option6;*/
  var testPro=require('./databaseServer/testdao');
  testPro(testname,maxmarks,passingmarks,totaltime,negmarking,coursename,testype,respns);
});

//**************video post server code****************


app.post("/video",function(req,respns){
  console.log("in reg post function");
  var videoname=req.body.videoname;
  var batchid=req.body.batchid;
  var coursename=req.body.coursename;
  var videoData=require('./databaseServer/videoDao');
  videoData(videoname,batchid,coursename,respns);
});


app.listen(1234,function()
{
  console.log("Server listen to 1234 ");
});
