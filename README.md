# The Express-Sequelize generator

This project is a fork from [generator-angular-express-sequelize](https://github.com/rayokota/generator-angular-express-sequelize).

A [Yeoman](http://yeoman.io) generator for [Express](http://expressjs.com) with [Sequelize](http://sequelizejs.com).

Express is a Javascript-based micro-framework.

## Installation

Install [Git](http://git-scm.com) and [node.js](http://nodejs.org).  The development mode also requires [SQLite](http://www.sqlite.org).

Install Yeoman:

    npm install -g yo

Install the Express-Sequelize generator:

    npm install -g generator-express-sequelize

## Creating an Express service

In a new directory, generate the service:

    yo express-sequelize

Run the service:

    node app.js

Your service will run at [http://localhost:3000](http://localhost:3000).


## Creating a persistent entity

Generate the entity:

    yo express-sequelize:entity [myentity]

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