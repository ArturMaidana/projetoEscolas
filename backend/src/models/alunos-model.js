const { Model, DataTypes } = require("sequelize");

class AlunosModel extends Model {
    static init(database) {
        super.init(
            {
                nomealuno: DataTypes.STRING,
                cpf: DataTypes.INTEGER,
                genero: DataTypes.STRING,
                telefone: DataTypes.INTEGER,
                responsavel: DataTypes.STRING,
                email: DataTypes.STRING,
                nascimento: DataTypes.STRING,
                endereço: DataTypes.STRING,
                p1: DataTypes.INTEGER,
                p2: DataTypes.INTEGER,
                p3: DataTypes.INTEGER,
                mf: DataTypes.INTEGER,
                faltas: DataTypes.INTEGER,
                turma: DataTypes.STRING,
                escola: DataTypes.STRING,
                status: DataTypes.STRING,
                escolaId: DataTypes.INTEGER,
                turmasId: DataTypes.INTEGER,
            },
            {
                tableName: "Alunos",
                modelName: "AlunosModel",
                timestamps: false,
                sequelize: database,
            }
        );
    }
    static associate(models) {
        this.belongsTo(models.EscolaModel, { foreignKey: "escolaID" });
        this.belongsTo(models.TurmasModel, { foreignKey: "TurmasId" });
    }
}

module.exports = { AlunosModel };
