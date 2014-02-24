var express = require('express')
<% _.each(entities, function (entity) { %>
  , <%= pluralize(entity.name) %> = require('./routes/<%= pluralize(entity.name) %>')<% }); %>
  , http    = require('http')
  , path    = require('path')
  , db      = require('./models')

var app = express()

// all environments
app.set('port', process.env.PORT || 3000)
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.favicon())
app.use(express.logger('dev'))
app.use(express.json())
app.use(express.urlencoded())
app.use(express.methodOverride())
app.use(app.router)
app.use(express.static(path.join(__dirname, 'public')))

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler())
}

<% _.each(entities, function (entity) { %>
app.get('/<%= baseName %>/<%= pluralize(entity.name) %>', <%= pluralize(entity.name) %>.findAll)
app.get('/<%= baseName %>/<%= pluralize(entity.name) %>/:<%= entity.name %>Id', <%= pluralize(entity.name) %>.find)
app.post('/<%= baseName %>/<%= pluralize(entity.name) %>', <%= pluralize(entity.name) %>.create)
app.put('/<%= baseName %>/<%= pluralize(entity.name) %>/:<%= entity.name %>Id', <%= pluralize(entity.name) %>.update)
app.del('/<%= baseName %>/<%= pluralize(entity.name) %>/:<%= entity.name %>Id', <%= pluralize(entity.name) %>.destroy)
app.param('<%= entity.name %>Id',<%= pluralize(entity.name) %>.load)
<% }); %>

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});

db
  .sequelize
  .sync()
  .complete(function(err) {
    if (err) {
      throw err
    } else {
      http.createServer(app).listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'))
      })
    }
  })
