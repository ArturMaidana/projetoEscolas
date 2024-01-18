const { Model, DataTypes } = require("sequelize");

class professorModel extends Model {
    static init(database) {
        super.init(
            {
                nomeProfessor: DataTypes.STRING,
                estado: DataTypes.STRING,
                cidade: DataTypes.STRING,
                disciplina: DataTypes.STRING,
                aulas: DataTypes.INTEGER,
                faltas: DataTypes.INTEGER,
                escolasId: DataTypes.INTEGER,
                turmasId: DataTypes.INTEGER,
            },
            {
                tableName: "Professor",
                modelName: "professorModel",
                timestamps: false,
                sequelize: database,
            }
        );
    }
    static associate(models) {
        this.belongsTo(models.EscolaModel, { foreignKey: "escolasId" });
        this.belongsTo(models.TurmasModel, { foreignKey: "TurmasId" });
    }
}

module.exports = { professorModel };
