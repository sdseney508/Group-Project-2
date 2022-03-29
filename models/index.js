const User = require('./User');
const Captured = require('./Captured');
const Favorites = require('./Favorites');

User.hasMany(Captured, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Favorites, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});


module.exports = { User, Captured, Favorites };
