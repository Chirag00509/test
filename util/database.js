const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize-youtube', 'root', 'Chiraglabha5241@', {
    dialect : 'mysql',
    host :"localhost",
});

module.exports = sequelize;