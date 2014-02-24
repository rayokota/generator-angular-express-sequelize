var db = require('../models')

exports.load = function(req,res,id,next) {
  db.<%= _.capitalize(name) %>.find(id).complete(function(err,<%=name%>) {
    if(err) return next(err)
    if(!<%=name%>) return res.send(404)
    req.<%=name%> = <%=name%>;
    next();
  });
}

exports.findAll = function(req, res, next) {
  db.<%= _.capitalize(name) %>.findAll().complete(function(err,entities) {
    if(err) return next(err);
    res.json(entities)
  })
}

exports.find = function(req, res, next) {
  res.json(req.<%=name%>);
}

exports.create = function(req, res, next) {
  db.<%= _.capitalize(name) %>.create(req.body).complete(function(err,entity) {
    if(err) return next(err);
    res.statusCode = 201
    res.json(entity)
  })
}

exports.update = function(req, res, next) {
  req.<%= name %>.updateAttributes(req.body).complete(function(err,entity) {
    if(err) return next(err);
    res.json(entity)
  })
}

exports.destroy = function(req, res, next) {
  req.<%= name %>.destroy().complete(function(err) {
    if(err) return next(err);
    res.end()
  })
}
