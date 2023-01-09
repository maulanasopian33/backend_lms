'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('purchase_dp_prakerjas', {
      invoice_code: {
        primaryKey : true,
        type: Sequelize.STRING
      },
      course_code: {
        type: Sequelize.STRING,
        onDelete : "CASCADE",
        onUpdate : "CASCADE",
        references : {
          model : "courses",
          key : "course_code",
          as : "course_code"         
        }
      },
      schedule_code: {
        type: Sequelize.STRING
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
      prakerja_name: {
        type: Sequelize.STRING,
        onDelete : "CASCADE",
        onUpdate : "CASCADE",
        references : {
          model : "students",
          key : "prakerja_name",
          as : "prakerja_name"
        }
      },
      platform_code: {
        type: Sequelize.STRING,
        onDelete : "CASCADE",
        onUpdate : "CASCADE",
        references : {
          model : "digital_platforms",
          key : "platform_code",
          as : "platform_code"
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
    await queryInterface.dropTable('purchase_dp_prakerjas');
  }
};