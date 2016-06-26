var mongoose=require("mongoose");
mongoose.createConnection("127.0.0.1:27017/lms");
var testSchema= mongoose.Schema({testname:{type:'string'},
  maxmarks:{type:'string'},
  passingmarks:{type:'string'},
  totaltime:{type:'string'},
  negmarking:{type:'string'},
  coursename:{type:'string'},
  testtype:{type:'string'}
  /*examtype:[{questionno:{type:'string'},
    question:{type:'string'},
    answer:[{option1:{type:'string'}},
      {option2:{type:'string'}},{option3:{type:'string'}},{option4:{type:'string'}},
      {option5:{type:'string'}},{option6:{type:'string'}}]},
    {questionno:{type:'string'},
      question:{type:'string'},
      answer:[{option1:{type:'string'}},
        {option2:{type:'string'}},{option3:{type:'string'}},{option4:{type:'string'}},
        {option5:{type:'string'}},{option6:{type:'string'}}]}]*/});
var test= mongoose.model("tests",testSchema);
module.exports=test;
