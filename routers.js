// routes.js

const express = require('express');
const routes = require('./routes');
const alunosController = require('./controllers/alunosController');

// Rotas para alunos
router.post('/alunos', alunosController.cadastrarAluno);
router.get('/alunos', alunosController.listarAlunos);
router.put('/alunos/:id', alunosController.editarAluno);
router.delete('/alunos/:id', alunosController.removerAluno);

module.exports = router;