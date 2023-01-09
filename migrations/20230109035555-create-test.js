'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tests', {
      test_id: {
        primaryKey : true,
        type: Sequelize.INTEGER
      },
      course_id: {
        type: Sequelize.STRING,
        onDelete : "CASCADE",
        onUpdate : "CASCADE",
        references : {
          model : "courses",
          key : "course_id",
          as : "course_id"
        }
      },
      test_type: {
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
    await queryInterface.dropTable('tests');
  }
};