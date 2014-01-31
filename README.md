# The Angular-Express-Sequelize generator 

A [Yeoman](http://yeoman.io) generator for [AngularJS](http://angularjs.org) and [Express](http://expressjs.com) with [Sequelize](http://sequelizejs.com).

Express is a Javascript-based micro-framework.  For AngularJS integration with other micro-frameworks, see https://github.com/rayokota/MicroFrameworkRosettaStone.

## Installation

Install [Git](http://git-scm.com) and [node.js](http://nodejs.org).  The development mode also requires [SQLite](http://www.sqlite.org).

Install Yeoman:

    npm install -g yo

Install the Angular-Express-Sequelize generator:

    npm install -g generator-angular-express-sequelize

## Creating an Express service

In a new directory, generate the service:

    yo angular-express-sequelize

Run the service:

    node app.js

Your service will run at [http://localhost:3000](http://localhost:3000).


## Creating a persistent entity

Generate the entity:

    yo angular-express-sequelize:entity [myentity]

You will be asked to specify attributes for the entity, where each attribute has the following:

- a name
- a type (String, Integer, Float, Boolean, Date, Enum)
- for a String attribute, an optional minimum and maximum length
- for a numeric attribute, an optional minimum and maximum value
- for a Date attribute, an optional constraint to either past values or future values
- for an Enum attribute, a list of enumerated values
- whether the attribute is required

Files that are regenerated will appear as conflicts.  Allow the generator to overwrite these files as long as no custom changes have been made.

Run the service:

    node app.js
    
A client-side AngularJS application will now be available by running

	grunt server
	
The Grunt server will run at [http://localhost:9000](http://localhost:9000).  It will proxy REST requests to the Express service running at [http://localhost:3000](http://localhost:3000).

At this point you should be able to navigate to a page to manage your persistent entities.  

The Grunt server supports hot reloading of client-side HTML/CSS/Javascript file changes.

