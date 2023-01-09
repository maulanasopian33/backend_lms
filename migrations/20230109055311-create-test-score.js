'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('test_scores', {
      task_take_id: {
        primaryKey : true,
        type: Sequelize.INTEGER
      },
      test_id: {
        type: Sequelize.INTEGER,
        onDelete : "CASCADE",
        onUpdate : "CASCADE",
        references : {
          model : "tests",
          key : "test_id",
          as : "test_id"
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
      score: {
        type: Sequelize.INTEGER
      },
      test_date: {
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
    await queryInterface.dropTable('test_scores');
  }
};