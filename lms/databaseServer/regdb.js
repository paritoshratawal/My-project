var mongoose = require("mongoose");
mongoose.connect("127.0.0.1:27017/lms");
var schema=mongoose.Schema({fname:{type:'string'},lname:{type:'string'},userid:{type:'string'},pwd:{type:'string'},age:{type:'number'},
  dob:{type:'string'},gen:{type:'string'},contact:{type:'number'},email:{type:'string'},address:{type:'string'},zipcode:{type:'number'},
   city:{type:'string'},quaexp:{type:'string'},teachsub:{type:'string'},role:{rolename:{type:'string'},
    right:[
    {rightname:{type:'string'},link:{type:'string'}}
      ,{rightname:{type:'string'},link:{type:'string'}},
      {rightname:{type:'string'},link:{type:'string'}}
    ]
  }});
var regdata = mongoose.model('regdatas',schema);
module.exports=regdata;
