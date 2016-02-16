var express = require('express');
var app = express();
var path = require('path');
var port = 80;
var bodyParser = require('body-parser');
var multer  = require('multer');
var fs = require("fs");
var util = require("util");
var JsonDB = require('node-json-db');
var infosheet = new JsonDB("public/uploads/info.json", true, false);
var jsonfile = require('jsonfile')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/' + file.fieldname)
  },
  filename: function (req, file, cb) {
    var ext = file.originalname.split('.').pop();
    console.log(ext);
    cb(null, req.body.year + "_" + req.body.questionNumber + "." + ext)
  }
});

var upload = multer({ storage : storage });

app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile("/public/index.html");
});

app.get('/browse/:year/:questionNumber', function(req, res) {
  var route = path.resolve(__dirname + "/uploads/info.json");
  console.log(route);
   fs.readFile(route, function (err,data){
     console.log(err);
     res.pipe(data);
  });
});

app.get('/audio/:year/:id', function(req, res) {
  var filename = req.params.year + req.params.id;
  var route = path.resolve(__dirname + "/resources/audio/" + filename + ".mp3");
  console.log(filename);
   fs.readFile(route, function (err,data){
     console.log(err);
     res.send(data);
  });
});

app.get('/pdf/:folder/:year/:id', function(req, res) {
  var filename = req.params.year + req.params.id + "i";
  var route = path.resolve(__dirname + "/public/uploads/" + req.params.folder + "/" + filename + ".pdf");
  console.log(filename);
   fs.readFile(route, function (err,data){
     console.log(err);
     res.send(data);
  });
});

app.get('/json/:year/:id', function(req, res) {
  var filename = req.params.year + req.params.id;
  var route = path.resolve(__dirname + "/public/uploads/json/" + filename + ".json");
  console.log(filename);
   fs.readFile(route, function (err,data){
     console.log(err);
     res.json(data);
  });
});

app.post('/database/upload', upload.fields([{ name: 'indTranscript', maxCount: 1 }, { name: 'groupTranscript', maxCount: 1 }, { name: 'thumbnail', maxCount: 1 }]), function (req, res, next) {
  console.log(req.files);
  console.log(req.body);
   
  /*var file = 'public/uploads/info.json';
  var obj = {
    year: req.body.year,
    questionNumber: req.body.questionNumber,
    speakers_profile: req.body.speakers_profile,
    indYoutubeLink: req.body.indYoutubeLink,
    groupYoutubeLink: req.body.groupYoutubeLink,
    fullQuestion: req.body.fullQuestion,
    answer_date: req.body.date,
    indComments: [],
    groupComments: [],
    indRatings: [],
    groupRatings: []
  };
  jsonfile.writeFileSync(file, obj)*/
  res.send("ok");
});

app.listen(port, function() {
  console.log('SERVER RUNNING... PORT: ' + port);
});

//', upload.array('transcipts', 2)