const Sequelize = require('sequelize');

const connection = new Sequelize('listelapp', 'root', 'sqlserver', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = connection;