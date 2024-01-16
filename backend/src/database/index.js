const { Sequelize } = require("sequelize");
const configDatabase = require("./config");

const { UserModel } = require("../models/user-model");
const { TurmasModel } = require("../models/turmas-model");
const { professorModel } = require("../models/professor-model");
const { EscolaModel } = require("../models/escola-model");
const { AlunosModel } = require("../models/alunos-model");

const database = new Sequelize(configDatabase);

UserModel.init(database);
TurmasModel.init(database);
AlunosModel.init(database);
professorModel.init(database);
EscolaModel.init(database);

module.exports = database;
