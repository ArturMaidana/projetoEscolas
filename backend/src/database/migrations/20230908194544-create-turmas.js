'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Turmas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nometurmas: {
        type: Sequelize.STRING
      },
      ensino:{
        type: Sequelize.STRING
      },
      turno:{
        type:Sequelize.STRING,
        allowNull: false
      },
      cargaHoraria: {
        type: Sequelize.INTEGER
      },
      coordenador:{
        type:Sequelize.STRING,
        allowNull: false
      },
      turno:{
        type:Sequelize.STRING,
        allowNull: false
      },
      qtde_alunos:{
        type:Sequelize.INTEGER,
        allowNull: false
      },
      qtde_disciplinas:{
        type:Sequelize.INTEGER,
        allowNull: false
      },
      data_inicio: {
        type: Sequelize.STRING
      },
      data_final:{
        type: Sequelize.STRING
      },
      escolasId: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Turmas');
  }
};
