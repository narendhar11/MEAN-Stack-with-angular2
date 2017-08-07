var express = require("express");
var router = express.Router()

/*router.get('/',function(req,res){
  res.send('Hello world from indexjs')
})*/
router.get('/',function(req,res){
  res.render('index.html')
})

router.get('/basic',function(req,res){
  res.render('index.html')
})
module.exports = router;
