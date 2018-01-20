'use strict';

var mongoose = require('mongoose'),
Hotel = mongoose.model('Hotel');

exports.list_all_hotels = function(req, res) {
  Hotel.find({}, function(err, task) {
      if (err)
        res.send(err);

      console.dir(task);
      res.json(task);
    });
};

exports.create_a_hotel = function(req, res) {
  var new_task = new Hotel(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_hotel = function(req, res) {
 Hotel.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_a_hotel = function(req, res) {
 Hotel.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_a_hotel = function(req, res) {
 Hotel.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
