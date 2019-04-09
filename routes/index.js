'use strict'

var mongoose = require('mongoose');
var app = require('./app')

var port = 3800;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://kaztro:A123456@ds129560.mlab.com:29560/pdm_taller_2', {
  useMongoClient: true}).then(() => {
    console.log('Buenale')
    app.listen(port, () => {
      console.log('Servidor corriendo xd');
    });
  }).catch(err => console.log(err));

/*var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/