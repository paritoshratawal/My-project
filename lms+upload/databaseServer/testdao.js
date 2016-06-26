
function testData(testname,maxmarks,passingmarks,totaltime,negmarking,coursename,testype,response)
{
  console.log('im in insert data in collection in userdao')
  var test=require('./testdb');
  var test1=new test({
    testname:testname,
    maxmarks:maxmarks,
    passingmarks:passingmarks,
    totaltime:totaltime,
    negmarking:negmarking,
    coursename:coursename,
    testtype:testype
    /*examtype:
      [
        {questionno:queno,
      question:question,
      answer:[{option1:option1},
        {option2:option2},{option3:option3},{option4:option4},
        {option5:option5},{option6:option6}
      ]
        },
      {
        questionno:queno,
        question:question,
        answer:
          [
          {option1:option1},
        {option2:option2},{option3:option3},{option4:option4},
        {option5:option5},{option6:option6}
          ]
      }]*/
  },function(err,success){
    if(err)
    {
      response.send("error");
    }
    else
    if(success){
      response.send("success");
    }
  });
  console.log('In test property dao:',test1);
  test1.save();
}
module.exports=testData;
