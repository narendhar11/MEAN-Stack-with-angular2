var express = require("express");
var bodyparser = require('body-parser');
var path = require("path");
var multer = require("multer");

var app = express();
var port = process.env.PORT || 3000;

/*app.get('/',function(req,res) {
  res.send('Hello world...!')
})*/
//View engine
//app.set('views', path.join(__dirname,'./client/src') );
app.engine('html', require('ejs').renderFile);
//app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'client/src')))
app.use('/node_modules',express.static(path.join(__dirname,'client/node_modules')) );

// parse application/json
app.use(bodyparser.json())
// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false}))

var homeurl = require('./server/routes/index');
var apiurl = require('./server/routes/api');
app.use('/', homeurl);
app.use('/api', apiurl);

app.post("/upload", multer({dest: "./uploads/"}).array("uploads", 12), function(req, res) {
    res.send(req.files);
});

//Server works on 3000 I set environment port
app.listen(port, function(){
  console.log('Server is running on '+port+'...');
});
