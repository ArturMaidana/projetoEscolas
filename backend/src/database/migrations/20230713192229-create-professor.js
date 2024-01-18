'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Professor', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                unique: true
            },
            nomeProfessor: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: false
            },
            estado: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cidade: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            disciplina: {
                type: Sequelize.STRING,
                allowNull: false
            }
            ,
            aulas: {
                type: Sequelize.INTEGER,
                
            },
            faltas: {
                type: Sequelize.INTEGER,
               
            },
            escolasId: {
                type: Sequelize.INTEGER,
            },
            turmasId: {
                type: Sequelize.INTEGER,
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Professor');
    }
};
            