'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('enrollments', {
      enrollment_id: {
        primaryKey : true,
        type: Sequelize.INTEGER
      },
      purchase_id: {
        type: Sequelize.INTEGER,
        onDelete : "CASCADE",
        onUpdate : "CASCADE",
        references : {
          model : "purchase_lms",
          key : "purchase_id",
          as : "purchase_id"
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
      ennroll_date: {
        type: Sequelize.DATE
      },
      complate_date: {
        type: Sequelize.DATE
      },
      certificate_url: {
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
    await queryInterface.dropTable('enrollments');
  }
};