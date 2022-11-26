'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblBrg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tblBrg.init({
    nm_prod: DataTypes.TEXT,
    nm_merk: DataTypes.TEXT,
    desk_brg: DataTypes.TEXT,
    spek_brg: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'tblBrg',
  });
  return tblBrg;
};