function assgnData(assignmentname,batchid,subjectname,coursename,filename,response)
{
  console.log('In assignmentdao')
  var assginments=require('./assignmentdb');
  var assgn=new assginments({
    assignmentname:assignmentname,
    batchid:batchid,
    subjectname:subjectname,
    coursename:coursename,
    filename:filename
    /*coursename:coursename,
    filename:filename*/
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
  console.log('In assignment dao:',assgn);
  assgn.save();
}
module.exports=assgnData;
