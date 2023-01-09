'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('redeem_prakerjas', {
      redeem_code: {
        primaryKey:true,
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING,
        onDelete : "CASCADE",
        onUpdate : "CASCADE",
        references:{
          model:"students",
          key:"username",
          as:"username"
        }
      },
      redeem_date: {
        type: Sequelize.DATE
      },
      course_id: {
        type: Sequelize.STRING,
        onDelete : "CASCADE",
        onUpdate : "CASCADE",
        references : {
          model: "courses",
          key : "course_id",
          as : "course_id"
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
    await queryInterface.dropTable('redeem_prakerjas');
  }
};