'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('livros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      autorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "autors",
          key: "id"
        }
      },
      titulo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      editora: {
        allowNull: false,
        type: Sequelize.STRING
      },
      datapublicacao: {
        allowNull: false,
        type: Sequelize.DATE
      },
      preco: {
        allowNull: false,
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
    await queryInterface.dropTable('livros');
  }
};