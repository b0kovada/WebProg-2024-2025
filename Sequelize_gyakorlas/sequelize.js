// sequelize.js
const { Sequelize } = require('sequelize');

// Kapcsolódás az adatbázishoz
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql' // Használj más adatbázist, ha szükséges (pl. 'postgres', 'sqlite')
});

module.exports = sequelize;
