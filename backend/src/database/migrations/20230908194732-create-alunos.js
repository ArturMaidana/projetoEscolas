'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Alunos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomealuno: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.INTEGER
      },
      genero: {
        type: Sequelize.STRING
      },
      nascimento: {
        type: Sequelize.STRING
      },
      responsavel: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      endereço: {
        type: Sequelize.STRING
      },
      escola: {
        type: Sequelize.STRING
      },
      turma: {
        type: Sequelize.STRING
      },
      turno: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.INTEGER
      },
      p1: {
        type: Sequelize.INTEGER
      },
      p2: {
        type: Sequelize.INTEGER
      },
      p3: {
        type: Sequelize.INTEGER
      },
      mf: {
        type: Sequelize.INTEGER
      },
      faltas: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      escolaId: {
        type: Sequelize.INTEGER
      },
      turmasId: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Alunos');
  }
};

