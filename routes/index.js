var express = require('express');
var router = express.Router();

var PerfilController = require("../controllers/AlunosController");
var PerfilController = require("../controllers/ExerciciosController");
var PerfilController = require("../controllers/PerfilController");
var PerfilController = require("../controllers/TreinosController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fitness' });
});

router.get('/alunos', function(req, res, next) {
  res.render('alunos', { title: 'Alunos' });
});


router.get('/exercicios', function(req, res, next) {
  res.render('exercicios', { title: 'Exercicios' });
});

router.get('/perfil', function(req, res, next) {
  res.render('perfil', { title: 'Perfil' });
});

router.get('/treinos', function(req, res, next) {
  res.render('treinos', { title: 'Treinos' });
});


module.exports = router;
