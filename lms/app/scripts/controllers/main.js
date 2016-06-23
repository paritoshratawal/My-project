
'use strict';

/************LOGIN CONTROLLER***************/

app.controller('loginCtrl',function($scope,loginFactory,$localStorage)
{
  console.log("im in userctrl function");
  $scope.checkuser=function()
  {
    console.log("im in contrllr's checkuser function");
    var userid=$scope.userid;
    var pwd=$scope.pwd;
    var promise=loginFactory.authenticateUser(userid,pwd);
    promise.then(function(data)
    {
      $localStorage.afterdata=data;
      console.log("in localsstorage"+$localStorage.afterdata);
      if(data[0].userid==userid)
      {
        console.log("in success");
        location.href = "http://localhost:1234/views/dashboard.html";
      }
      else if(data=='invalid')
      {
        alert("invalid userid and password");
      }
      else {
        alert('fail');
      }
    },function(err)
    {
      alert("error",err);
    });
  }
});

 /*************REGISTRATION CONTROLLER******************/

app.controller('regCtrl',function($scope,regFactory)
{
  $scope.regUser=function()
  {
    alert('In controller regUser function');
    var fname = $scope.fname;
    var lname = $scope.lname;
    var uid=$scope.uid;
    var pwd=$scope.pwd;
    var age=$scope.age;
    var dob=$scope.dob;
    var gen=$scope.gender;
    var contact=$scope.contact;
    var email=$scope.email;
    var address=$scope.address;
    var zipcode=$scope.zipcode;
    var city=$scope.city;
    var quaexp=$scope.quaexp;
    var teachsub=$scope.teachsub;
    var promise = regFactory.registerUser(fname,lname,uid,pwd,age,dob,gen,contact,email,address,zipcode,city,quaexp,teachsub);
    console.log('promis in controller:',promise);
    promise.then(function (data) {
      console.log('data is',data);
      if (data == 'success') {
        alert('registared successfully');
      }
      else if (data == 'error') {
        alert('error');
      }
    },function(err){
      alert('something happens',err);
    });
  }
});


/*************ASSIGNMENT UPLOAD CONTROLLER****************/

app.controller('assignmentCtrl',function($scope,assignmentService)
{
  $scope.uploadAssign=function()
  {
    var assgname = $scope.assignmentname;
    var batchid = $scope.batchid;
    var subname=$scope.subjectname;
    var coursename=$scope.course;
    var promise = assignmentService.assignment(assgname,batchid,subname,coursename);
    console.log('promis in controller:',promise);
    promise.then(function (data) {
      console.log('data is',data);
      if (data == 'success') {
        alert('registared successfully');
      }
      else if (data == 'error') {
        alert('error');
      }
    },function(err){
      alert('something happens',err);
    });
  }
});






/***************make test data code****************/


app.controller('testCtrl',function($scope,testFactory){
  $scope.testProperties=function() {
    console.log('in test controller');
    var testname = $scope.testname;
    var max = $scope.maxmarks;
    var passingmarks = $scope.passingmarks;
    var totaltime = $scope.totaltime;
    var negmarking = $scope.negmarking;
    var coursename = $scope.coursename;
    var testtype = $scope.testype;
    var promise = testFactory.testPro(testname,max,passingmarks,totaltime,negmarking,coursename,testtype);
    promise.then(function (data) {
      if (data == 'success') {
        alert('registared successfully');
      }
      else if (data == 'error') {
        alert('error');
      }
    });
  }
});

/*
/!*questions answers data code*!/

app.controller('examCtrl',function($scope,examFactory){
  $scope.createExam=function()
  {
    alert('in regUser function');
    var queno=$scope.queno;
    var question=$scope.question;
    var option1=$scope.option1;
    var option2=$scope.option2;
    var option3=$scope.option3;
    var option4=$scope.option4;
    var option5=$scope.option5;
    var option6=$scope.option6;
  }
  var promise=examFactory.examData(queno,question,option1,option2,option3,option4,option5,option6);
  promise.then(function(data)
  { if(data=='success')
  {
    alert('registared successfully');
  }
  else if(data=='error')
  {
    alert('error');
  }
  });
});

/!*code ends here*!/*/

//******************video upload data code****************

app.controller('videoCtrl',function($scope,videoFactory){
  $scope.videoUplaod=function() {
    //alert('in regUser function');
    var videoname = $scope.videoname;
    var batchid = $scope.batchid;
    var coursename = $scope.coursename;
    var promise = videoFactory.videoData(videoname,batchid,coursename);
    promise.then(function (data) {
      if (data=='success') {
        alert('registared successfully');
      }
      else if (data == 'error') {
        alert('error');
      }
      else{
        alert('fail');
      }
    });
  }
});


/**************Local Storage***************/

app.controller('dashCtrl',function($scope,$localStorage)
{
  $scope.data=$localStorage.afterdata;
  console.log('Data is:', $scope.data);
  $scope.firstname=$scope.data[0].fname;
  console.log('Firstname is :',$scope.firstname);
  $scope.lastname=$scope.data[0].lname;
  console.log('Lastname is :',$scope.lastname);
  $scope.role=$scope.data[0].role;
  console.log('role is :',$scope.role);
  $scope.right=$scope.role.right;
  console.log('Right is:',$scope.right);
});

