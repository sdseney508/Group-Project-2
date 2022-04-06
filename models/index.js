const User = require('./User');
const Captured = require('./Captured');
const UserPokedex = require('./UserPokedex');
const PokeName = require('./PokeNames');

User.hasMany(Captured, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Captured.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(UserPokedex, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


module.exports = { User, Captured, UserPokedex, PokeName };
