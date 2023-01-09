'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courses', {
      course_id: {
        allowNull : false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      course_code: {
        unique : true,
        type:Sequelize.STRING
      },
      schedule_code :{
        type : Sequelize.STRING
      },
      course_name : {
        type : Sequelize.STRING
      },
      course_url : {
        type : Sequelize.STRING
      },
      course_price : {
        type : Sequelize.INTEGER
      },
      category_code : {
        type : Sequelize.STRING,
        onDelete : "CASCADE",
        onUpdate : "CASCADE",
        references : {
          model : "course_categories",
          key : "category_code",
          as : "category_code"
        }
      },
      schedule_start_date : {
        type : Sequelize.DATE
      },
      schedule_end_date : {
        type : Sequelize.DATE
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
    await queryInterface.dropTable('courses');
  }
};