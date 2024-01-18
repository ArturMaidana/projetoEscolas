'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Escolas', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                unique: true
            },
            nomeEscola: {
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
            diretor: {
                type: Sequelize.STRING,
                allowNull: false
            }
            ,
            usuarioId: {
                type: Sequelize.INTEGER,
            }
            ,
            alunosId: {
                type: Sequelize.INTEGER,
            },
            turmasId: {
                type: Sequelize.INTEGER,
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Escolas');
    }
};
