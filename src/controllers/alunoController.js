const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Função para cadastrar um aluno
async function cadastrarAluno(req, res) {
  const { nome, idade, curso } = req.body;
  try {
    const aluno = await prisma.aluno.create({
      data: {
        nome,
        idade,
        curso,
      },
    });
    res.status(201).json(aluno);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar aluno' });
  }
}

// Função para listar todos os alunos
async function listarAlunos(req, res) {
  try {
    const alunos = await prisma.aluno.findMany();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar alunos' });
  }
}

// Função para editar um aluno pelo ID
async function editarAluno(req, res) {
  const id = parseInt(req.params.id);
  const { nome, idade, curso } = req.body;
  try {
    const aluno = await prisma.aluno.update({
      where: { id },
      data: {
        nome,
        idade,
        curso,
      },
    });
    res.json(aluno);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao editar aluno' });
  }
}

// Função para remover um aluno pelo ID
async function removerAluno(req, res) {
  const id = parseInt(req.params.id);
  try {
    await prisma.aluno.delete({
      where: { id },
    });
    res.json({ message: 'Aluno removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover aluno' });
  }
}

module.exports = {
  cadastrarAluno,
  listarAlunos,
  editarAluno,
  removerAluno,
};