'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tblBrgs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nm_prod: {
        type: Sequelize.STRING
      },
      nm_merk: {
        type: Sequelize.STRING
      },
      desk_brg: {
        type: Sequelize.TEXT
      },
      spek_brg: {
        type: Sequelize.TEXT
      },
      img_brg: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tblBrgs');
  }
};