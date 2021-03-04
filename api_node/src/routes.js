const { Router } = require('express');

const routes = Router();


//IMPORTAÇÃO DOS CONTROLLERS PARA MANIPULAÇÃO DOS DADOS
const UserController = require('./controllers/UserController');
const CompanyController = require('./controllers/UserController');
const OfficeController = require('./controllers/UserController');
const AreaController = require('./controllers/UserController');


//ROTAS DOS USUARIOS

routes.get('/users', UserController.index) //busca todos os usuarios
routes.post('/users', UserController.store) //grava um novo usuario

//ROTAS DA COMPANHIA

routes.get('/companies', CompanyController.index) //busca todas as companhias
routes.post('/compnies', CompanyController.store) //grava uma nova companhia


//ROTAS DOS CARGOS

routes.get('/offices', OfficeController.index) //busca todos os cargos
routes.post('/offices', OfficeController.store) //grava um novo cargo

//ROTAS DA ÁREA

routes.get('/areas', AreaController.index) //busca todas as áreas
routes.post('/areas', AreaController.store) // grava uma nova área


module.exports = routes;