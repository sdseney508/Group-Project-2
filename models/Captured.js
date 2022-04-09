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
    poke_id: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    types: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    weight: {
      type: DataTypes.INTEGER
    },
    abilities: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    weaknesses: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    strengths: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    base_hp: {
      type: DataTypes.NUMBER
    },
    base_attack: {
      type: DataTypes.NUMBER
    },
    base_defense: {
      type: DataTypes.NUMBER
    },
    speed: {
      type: DataTypes.NUMBER
    },
    evolutions: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    evo_pic: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    generation: {
      type: DataTypes.STRING
    },
    image_url: {
      type: DataTypes.STRING
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
