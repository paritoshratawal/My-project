var mongoose=require("mongoose");
mongoose.createConnection("127.0.0.1:27017/lms");
var assignSchema= mongoose.Schema({assignmentname:{type:'string'},
  batchid:{type:'string'},
  subjectname:{type:'string'},
  coursename:{type:'string'}
   });
var assignment = mongoose.model("assignments",assignSchema);

module.exports=assignment;
