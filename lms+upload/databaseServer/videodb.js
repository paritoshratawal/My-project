var mongoose=require("mongoose");
mongoose.createConnection("127.0.0.1:27017/lms");
var videoSchema=mongoose.Schema({videoname:{type:'string'},
  batchid:{type:'string'},
  coursename:{type:'string'}});
var video = mongoose.model("coursevideos",videoSchema);
module.exports=video;
