const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserPokedex extends Model {}

UserPokedex.init(
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    custom_name: {
      type: DataTypes.STRING,
      defaultValue: this.name
    },

    favorite: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userpokedex'
  }
);

module.exports = UserPokedex;