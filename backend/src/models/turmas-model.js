const { Model, DataTypes } = require("sequelize");

class TurmasModel extends Model {
    static init(database) {
        super.init(
            {
                nometurmas: DataTypes.STRING,
                ensino: DataTypes.STRING,
                turno: DataTypes.STRING,
                cargaHoraria: DataTypes.INTEGER,
                coordenador: DataTypes.STRING,
                qtde_disciplinas: DataTypes.STRING,
                qtde_alunos: DataTypes.STRING,
                data_inicio: DataTypes.STRING,
                data_final: DataTypes.STRING,
                escolasId: DataTypes.STRING,
            },
            {
                tableName: "Turmas",
                modelName: "TurmasModel",
                timestamps: false,
                sequelize: database,
            }
        );
    }

    static associate(models) {
        this.hasMany(models.EscolaModel, { foreignKey: "escolasId" });
    }
}

module.exports = { TurmasModel };
