var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var db = req.db;
  db.collection('todos').find().toArray(function (error, todos) {
    if (error) {
      return next(error);
    }
    res.render('index', { title: 'ToDo List', todos: todos || [] });
  });
});

router.post('/insert', function(req, res) {
  var db = req.db;
  db.collection('todos').insert(req.body, function(error, result) {
    if (error) {
      return next(error);
    }
    res.redirect('/todos');
  });
});

router.delete('/delete/:id', function(req, res) {
  var db = req.db;
  var idToDelete = req.params.id;
  db.collection('todos').removeById(idToDelete, function(error, result) {
    if (error) {
      return next(error);
    }
    res.status(200).send();
  });
});

module.exports = router;
