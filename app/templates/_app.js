var express        = require('express')
  , bodyParser     = require('body-parser')
  , errorHandler   = require('errorhandler')
  , methodOverride = require('method-override')
  , morgan         = require('morgan')
  , http           = require('http')
  , path           = require('path')
  , db             = require('./models')
<% _.each(entities, function (entity) { %>
  , <%= pluralize(entity.name) %> = require('./routes/<%= pluralize(entity.name) %>')<% }); %>

var app = express()

// all environments
app.set('port', process.env.PORT || 3000)
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(morgan('dev'))
app.use(bodyParser())
app.use(methodOverride())
app.use(express.static(path.join(__dirname, 'public')))

// development only
if ('development' === app.get('env')) {
  app.use(errorHandler())
}

<% _.each(entities, function (entity) { %>
app.get('/<%= baseName %>/<%= pluralize(entity.name) %>', <%= pluralize(entity.name) %>.findAll)
app.get('/<%= baseName %>/<%= pluralize(entity.name) %>/:id', <%= pluralize(entity.name) %>.find)
app.post('/<%= baseName %>/<%= pluralize(entity.name) %>', <%= pluralize(entity.name) %>.create)
app.put('/<%= baseName %>/<%= pluralize(entity.name) %>/:id', <%= pluralize(entity.name) %>.update)
app.del('/<%= baseName %>/<%= pluralize(entity.name) %>/:id', <%= pluralize(entity.name) %>.destroy)
<% }); %>

db
  .sequelize
  .sync()
  .complete(function(err) {
    if (err) {
      throw err
    } else {
      http.createServer(app).listen(app.get('port'), function() {
        console.log('Express server listening on port ' + app.get('port'))
      })
    }
  })
