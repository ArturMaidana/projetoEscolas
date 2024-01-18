const { Router, request } = require("express");

const { UserController } = require("./controllers/Usuarios-Controller");
const { TurmasController } = require("./controllers/Turmas-Controller");
const { AlunosController } = require("./controllers/Alunos-Controller");
const { ProfessorController } = require("./controllers/Professor-Controller");
const { EscolaController } = require("./controllers/Escola-Controller");
const { authMiddleware } = require("./middleware/auth-middleware");

const routes = Router();

const usercontroller = new UserController();
const turmascontroller = new TurmasController();
const alunoscontroller = new AlunosController();
const professorcontroller = new ProfessorController();
const escolacontroller = new EscolaController();

//Rotas de turmas
routes.post("/turma", authMiddleware, turmascontroller.create);
routes.get("/turmas", authMiddleware, turmascontroller.getAll);
routes.delete("/turmas/:id", authMiddleware, turmascontroller.delete);
routes.put("/turmas/:id", authMiddleware, turmascontroller.update);

//Rotas de professor
routes.post("/professor", authMiddleware, professorcontroller.create);
routes.get("/professores", authMiddleware, professorcontroller.getAll);
routes.delete("/professores/:id", authMiddleware, professorcontroller.delete);
routes.put("/professores/:id", authMiddleware, professorcontroller.update);

//Rotas de escola
routes.post("/escola", authMiddleware, escolacontroller.create);
routes.get("/escolas", authMiddleware, escolacontroller.getAll);
routes.delete("/escolas/:id", authMiddleware, escolacontroller.delete);
routes.put("/escolas/:id", authMiddleware, escolacontroller.update);

//Rotas de Alunos
routes.post("/aluno", authMiddleware, alunoscontroller.create);
routes.get("/alunos", authMiddleware, alunoscontroller.getAll);
routes.delete("/alunos/:id", authMiddleware, alunoscontroller.delete);
routes.put("/alunos/:id", authMiddleware, alunoscontroller.update);

//Rotas de Usuario
routes.get("/users", authMiddleware, usercontroller.getAll);
routes.delete("/user/:id", authMiddleware, usercontroller.delete);
routes.put("/user/:id", authMiddleware, usercontroller.update);
routes.get("/profile", authMiddleware, usercontroller.getProfile);
routes.post("/register", usercontroller.register);
routes.post("/login", usercontroller.login);

module.exports = { routes };
