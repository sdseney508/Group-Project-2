const User = require('./User');
const Captured = require('./Captured');
const Pokedex = require('./UserPokedex');

User.hasMany(Captured, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Pokedex, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});


module.exports = { User, Captured, Pokedex };
