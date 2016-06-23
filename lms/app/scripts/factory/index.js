'use strict';
app.factory('loginFactory',function($http,$q)
{

  var authenticateUser=function(userid,pwd)
  {

    var defered=$q.defer();
    var mydata={
      userid:userid,
      pwd:pwd
    };
    console.log('my login data:',mydata);

    $http.post("/login",mydata).success(function(data)
    {
      console.log("after http");
      defered.resolve(data);
      alert("welcome"+" "+userid);
    }).error(function(er)
    {
      console.log('error is'+er);
      defered.reject(er);
    });
    return defered.promise;
  }
  return{"authenticateUser":authenticateUser};
});


/*Registration Factory Code*!/*/

app.factory('regFactory',function($http,$q){
  var registerUser=function(fname,lname,uid,pwd,age,dob,gen,contact,email,address,zipcode,city,quaexp,teachsub){
    var defered=$q.defer();
    var regData={
      fname:fname,
      lname:lname,
      uid:uid,
      pwd:pwd,
      age:age,
      dob:dob,
      gen:gen,
      contact:contact,
      email:email,
      address:address,
      zipcode:zipcode,
      city:city,
      quaexp:quaexp,
      teachsub:teachsub
    };
    console.log('data is :',regData);
    $http.post('reg',regData).success(function(data)
    {console.log('In factory reg post Function')
      console.log('data is',data);
      defered.resolve(data)
    }).error(function(err)
    {
      console.log('err is ',err);
      defered.reject(err)
    });
    return defered.promise;
  }
  return{registerUser:registerUser};
});

/*upload assignment factory code*/
app.factory('assignmentService',function($http,$q){
  //alert('in Assignment factory');
  var assignment=function(assgname,batchid,subname,coursename){
    var defered=$q.defer();
    var assignData={
      assigname:assgname,
      batchid:batchid,
      subname:subname,
      course:coursename
    };
    console.log('data is :',assignData);
    $http.post('/assign',assignData).success(function(data)
    {console.log('In factory reg post Function')
      console.log('data is',data);
      defered.resolve(data)
    }).error(function(err)
    {
      console.log('err is ',err);
      defered.reject(err)
    });
    return defered.promise;
  }
  return{assignment:assignment};
});



/**************test properties factory code***************************/

app.factory('testFactory',function($http,$q){
  //alert('in registration factory');
  var testPro=function(testname,maxmarks,passingmarks,totaltime,negmarking,coursename,testype){
    var defered=$q.defer();
    var testData={
      testname:testname,
      maxmarks:maxmarks,
      passingmarks:passingmarks,
      totaltime:totaltime,
      negmarking:negmarking,
      coursename:coursename,
      testtype:testype
    };
    console.log("Data is:",testData);
    $http.post('/testpro',testData).success(function(data)
    {
      console.log('data is',data);
      defered.resolve(data)
    }).error(function(err)
    {
      console.log('err is ',err);
      defered.reject(err)
    });
    return defered.promise;
  }
  return{"testPro":testPro};
});

/**question answer factory code*

app.factory('examFactory',function($http,$q){
  alert('in registration factory');
  var examData=function(examtype,queno,question,option1,option2,option3,option4,option5,option6){
    var defered=$q.defer();
    var queansData=
    {
      examtype:examtype,
      queno:queno,
      question:question,
      option1:option1,
      option2:option2,
      option3:option3,
      option4:option4,
      option5:option5,
      option6:option6
    };
    $http.post('exam',queansData).success(function(data)
    {
      console.log('data is',data);
      defered.resolve(data)
    }).error(function(err)
    {
      console.log('err is ',err);
      defered.reject(err)
    });
    return defered.promise;
  }
  return{"examFactory":examData};
});*/

//************upload video factory code**************

app.factory('videoFactory',function($http,$q){
  //alert('in registration factory');
  var videoData=function(videoname,batchid,cousrename){
    var defered=$q.defer();
    var vidData={
      videoname:videoname,
      batchid:batchid,
      coursename:cousrename
    };
    console.log('Video Data is:',vidData);
    $http.post('/video',vidData).success(function(data)
    {
      console.log('response');
      defered.resolve(data)
      console.log('DONE:'+data)
    }).error(function(err)
    {
      console.log('err is ',err);
      defered.reject(err)
    });
    return defered.promise;
  }
  return{'videoData':videoData};
});

