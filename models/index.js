const User = require('./User');
const Captured = require('./Captured');

User.hasMany(Captured, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Captured.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Captured };
