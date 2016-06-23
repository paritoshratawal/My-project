function regData(fname,lname,uid,pwd,age,dob,gen,contact,email,address,zipcode,city,quaexp,teachsub,response)
{
  console.log('im in insert data in collection in userdao')
  var reg=require('./regdb');
  var regdatas = new reg({
    fname:fname,
    lname:lname,
    userid:uid,
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
    teachsub:teachsub,
    role:{rolename:'Teacher',right:
      [
        {rightname:'UPLOAD ASSIGNMENTS',link:'#/create'},
        {rightname:'MAKE TEST',link:'#/test'},
        {rightname:'UPLOAD COURSE VIDEOS',link:'#/video'}
      ]
    }
    },function(err,docs){
    if(err)
    {
      response.send("error");
    }
    else
    if(docs){
      response.send("success");
    }
  });
console.log('in regdao',regdatas);
  regdatas.save();
}
module.exports=regData;

