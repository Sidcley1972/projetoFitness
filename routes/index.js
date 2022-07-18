var express = require('express');
var router = express.Router();

var AlunosController = require("../controllers/AlunosController");
var ExerciciosController = require("../controllers/ExerciciosController");
var PerfilController = require("../controllers/PerfilController");
var PeTreinosController = require("../controllers/TreinosController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fitness' });
});

/* GET Alunos */
router.get('/alunos', function(req, res, next) {
  res.render('alunos', { title: 'Alunos' });
});


router.get('/alunos/alunosLista', AlunosController.viewAlunos);

router.get('/alunos/alunosAdd', AlunosController.addAlunos);

router.get('/exercicios', function(req, res, next) {
  res.render('exercicios', { title: 'Exercícios' });
});

router.get('/perfil', function(req, res, next) {
  res.render('perfil', { title: 'Perfil' });
});

router.get('/treinos', function(req, res, next) {
  res.render('treinos', { title: 'Treinos' });
});





module.exports = router;
