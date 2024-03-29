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
    nm_prod: DataTypes.STRING,
    nm_merk: DataTypes.STRING,
    desk_brg: DataTypes.TEXT,
    spek_brg: DataTypes.TEXT,
    img_brg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tblBrg',
  });
  return tblBrg;
};