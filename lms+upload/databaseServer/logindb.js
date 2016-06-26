var mongoose=require("mongoose");
mongoose.connect("127.0.0.1:27017/lms");
var schema=mongoose.Schema;
var userSchema= new schema({});
var User = mongoose.model("regdatas",userSchema);

module.exports=User;
