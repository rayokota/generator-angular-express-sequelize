var db = require('../models')

exports.findAll = function(req, res) {
  db.<%= _.capitalize(name) %>.findAll().success(function(entities) {
    res.json(entities)
  })
}

exports.find = function(req, res) {
  db.<%= _.capitalize(name) %>.find({ where: { id: req.param('id') } }).success(function(entity) {
    if (entity) {
      res.json(entity)
    } else {
      res.send(404)
    }
  })
}

exports.create = function(req, res) {
  db.<%= _.capitalize(name) %>.create(req.body).success(function(entity) {
    res.statusCode = 201
    res.json(entity)
  })
}

exports.update = function(req, res) {
  db.<%= _.capitalize(name) %>.find({ where: { id: req.param('id') } }).success(function(entity) {
    if (entity) {
      entity.updateAttributes(req.body).success(function(entity) {
        res.json(entity)
      })
    } else {
      res.send(404)
    }
  })
}

exports.destroy = function(req, res) {
  db.<%= _.capitalize(name) %>.find({ where: { id: req.param('id') } }).success(function(entity) {
    if (entity) {
      entity.destroy().success(function() {
        res.end()
      })
    } else {
      res.send(404)
    }
  })
}
