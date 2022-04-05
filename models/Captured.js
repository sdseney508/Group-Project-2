const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Captured extends Model {}

Captured.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    game_caught: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_caught: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    custom_name: {
      type: DataTypes.STRING,
      defaultValue: this.name
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'captured'
  }
);

module.exports = Captured;
