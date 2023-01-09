'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vouchers', {
      voucher_code: {
        type: Sequelize.STRING,
        primaryKey:true
      },
      course_id: {
        type: Sequelize.STRING,
        onDelete : "CASCADE",
        onUpdate : "CASCADE",
        references:{
          model : "courses",
          key : "course_id",
          as : "courses_id"
        }
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
    await queryInterface.dropTable('vouchers');
  }
};