module.exports = function(sequelize, DataTypes) {
  var <%= _.capitalize(name) %> = sequelize.define('<%= _.capitalize(name) %>', {
  <% _.each(attrs, function (attr) { %>
    <%= attr.attrName %>: {
      type: DataTypes.<%= attr.attrType.toUpperCase() %><% if (attr.attrType == 'Enum') { %>(<% var delim = ''; _.each(attr.enumValues, function (value) { %><%= delim %>'<%= value %>'<% delim = ', '; }) %>)<% }; %>,
      validate: {
        notNull: <%= attr.required %>,
        <% if (attr.maxLength) { if (attr.minLength) { %>len: [<%= attr.minLength %>, <%= attr.maxLength %>],<% } else { %>len: [0, <%= attr.maxLength %>],<% } };%>
        <% if (attr.min) { %>min: <%= attr.min %>,<% };%>
        <% if (attr.max) { %>max: <%= attr.max %>,<% };%>
      }
    },
  <% }); %>
  })

  return <%= _.capitalize(name) %>
}
