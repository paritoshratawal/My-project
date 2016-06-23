function videoData(videoname,batchid,cousrename,response)
{
  console.log('im in insert data in collection in userdao')
  var video=require('./videodb');
  var video1=new video({
    videoname:videoname,
    batchid:batchid,
    coursename:cousrename
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
  console.log('In video dao:',video1);
  video1.save();
}
module.exports=videoData;
