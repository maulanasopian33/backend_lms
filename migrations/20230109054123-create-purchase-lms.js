'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('purchase_lms', {
      purchase_id: {
        primaryKey : true,
        type: Sequelize.INTEGER
      },
      voucher_code: {
        type: Sequelize.STRING,
        onDelete : "CASCADE",
        onUpdate : "CASCADE",
        references : {
          model : "vouchers",
          key : "voucher_code",
          as : "voucher_code"
        }
      },
      username: {
        type: Sequelize.STRING,
        onDelete : "CASCADE",
        onUpdate : "CASCADE",
        references : {
          model : "students",
          key : "username",
          as : "username"
        }
      },
      purchase_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('purchase_lms');
  }
};