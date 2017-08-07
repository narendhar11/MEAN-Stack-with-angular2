var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs("xcessibility");

//Get all users
router.get('/users',function(req,res){
  db.users.find(
    function(err,data){
      if(err){
        res.send(err)
      }else{
        res.json(data);
      }
    });
});

//Get Single user
router.get('/user/:id',function(req,res){
  db.users.findOne({
    _id: mongojs.ObjectId(req.params.id)
  },function(err,data){
      if(err){
        res.send(err)
      }else{
        res.json(data);
      }
    });
});

//Save User
router.post('/user', function(req,res){
  var user = req.body;
  if(!user.username || !user.password || !user.role || !(user.isCompleted+'')){
    res.status(400);
    res.json({
      "error":"Invalid Data"
    });
  }else{
    db.users.save(user,function(err,result){
      if(err){
        res.send(err)
      }else{
        res.json(result);
      }
    })
  }
})

//Update user
router.put('/user/:id',function(req,res){
  var user = req.body;
  var upObj = {};

  if(user.username){
    upObj.username = user.username;
  }
  if(user.password){
    upObj.password = user.password;
  }
  if(user.role){
    upObj.role = user.role;
  }
  if(user.role){
    upObj.role = user.role;
  }
  if(user.isCompleted){
    upObj.isCompleted = user.isCompleted;
  }
  if(!upObj){
    res.status(400);
    res.json({
      "error":"Invalid Data"
    });
  }else{
  db.users.update({
    _id: mongojs.ObjectId(req.params.id)
  },upObj, {}, function(err,result){
      if(err){
        res.send(err)
      }else{
        res.json(result);
      }
    });
  }
});

//Delete user
router.delete('/user/:id',function(req,res){
  db.users.remove({
    _id: mongojs.ObjectId(req.params.id)
  },'', function(err,result){
      if(err){
        res.send(err)
      }else{
        res.json(result);
      }
    });
});

module.exports = router;
