const User = require('./User');
const Captured = require('./Captured');
const Pokedex = require('./pokedex.js');

User.hasMany(Captured, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(pokedex, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});


module.exports = { User, Captured, pokedex };
