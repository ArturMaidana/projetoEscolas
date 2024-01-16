const { Model, DataTypes } = require("sequelize");

class EscolaModel extends Model {
    static init(database) {
        super.init(
            {
                nomeEscola: DataTypes.STRING,
                estado: DataTypes.STRING,
                cidade: DataTypes.STRING,
                diretor: DataTypes.STRING,
                usuarioId: DataTypes.INTEGER,
                alunosId: DataTypes.INTEGER,
                turmasId: DataTypes.INTEGER,
            },
            {
                tableName: "Escolas",
                modelName: "EscolaModel",
                timestamps: false,
                sequelize: database,
            }
        );
    }
    static associate(models) {
        this.belongsTo(models.UserModel, { foreignKey: "usuarioId" });
        this.belongsTo(models.TurmasModel, { foreignKey: "turmasId" });
        this.belongsTo(models.AlunosModel, { foreignKey: "alunosId" });
    }
}

module.exports = { EscolaModel };
