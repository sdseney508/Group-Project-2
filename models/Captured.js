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
    p_id: {
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
      defaultValue: null
    },
    types: {
      type:DataTypes.TEXT,
      get:function(){
        return JSON.parse(this.getDataValue('types'));
      },
      set:function(value){
        return this.setDataValue('types', value);
      }
    },
    weight: {
      type: DataTypes.INTEGER
    },
    abilities: {
      type:DataTypes.TEXT,
      get:function(){
        return JSON.parse(this.getDataValue('abilities'));
      },
      set:function(value){
        return this.setDataValue('abilities', value);
      }
    },
    weaknesses: {
      type:DataTypes.TEXT,
      get:function(){
        return JSON.parse(this.getDataValue('weaknesses'));
      },
      set:function(value){
        return this.setDataValue('weaknesses', value);
      }
    },
    strengths: {
      type:DataTypes.TEXT,
      get:function(){
        return JSON.parse(this.getDataValue('strengths'));
      },
      set:function(value){
        return this.setDataValue('strengths', value);
      }
    },
    base_hp: {
      type: DataTypes.INTEGER
    },
    base_attack: {
      type: DataTypes.INTEGER
    },
    base_defense: {
      type: DataTypes.INTEGER
    },
    speed: {
      type: DataTypes.INTEGER
    },
    evolutions: {
      type:DataTypes.TEXT,
      get:function(){
        return JSON.parse(this.getDataValue('evolutions'));
      },
      set:function(value){
        return this.setDataValue('evolutions', value);
      }
    },
    evo_pic: {
      type:DataTypes.TEXT,
      get:function(){
        return JSON.parse(this.getDataValue('evo_pic'));
      },
      set:function(value){
        return this.setDataValue('evo_pic', value);
      }
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
