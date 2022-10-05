/*****************************************************
 * Objetivo: Criando os End-points das funções criadas no arquivo daddos.js
 * Data: 19/09/2022
 * Autor: Caroline A.
 * Versão: 1.0
 *****************************************************/

const { Router } = require('express')
const express = require('express')
const cors = require('cors')
const bodyParser = require ('body-parser')

const { nomeCursos, alunosCurso, statusAlunos, disciplinasAluno, anoConclusao } = require('../modulo/dados.js')
const app = express()
const routes = Router();


app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    app.use(cors())
    next()
})

//Retornando a função siglaCursos
routes.get('/cursos', cors(), async function(request, response, next){
    let listandoCurso =  nomeCursos()

    if(listandoCurso){
        response.status(200)
        response.json(listandoCurso)
    }else{
        response.status(404)
    }
})

//Retornando a função alunosCurso
routes.get('/aluno/curso/:sigla', cors(), async function(request, response, next ){
    let sigla = request.params.sigla
    let listandoAlunos = alunosCurso(sigla)

    if(listandoAlunos){
        response.status(200)
        response.json(listandoAlunos)
    }else{
        response.status(404)
    }
})

//Retornando a função StatusAlunos
routes.get('/status/aluno/curso/', cors(), async function(request, response, next ){
    let situacao = request.query.situacao
    let sigla = request.query.sigla
    let curso = alunosCurso(sigla)
    let listandoStatus = statusAlunos(situacao, curso)

   
        if(listandoStatus){
            response.status(200)
            response.json(listandoStatus)
        }else{
            response.status(404)
        }


})

//Retornando a função disciplinasAluno
routes.get('/disciplina/aluno/:matricula', cors(), async function(request, response, next){
    let matricula = request.params.matricula
    let exibindoDisciplina = disciplinasAluno(matricula)

    if(exibindoDisciplina){
        response.status(200)
        response.json(exibindoDisciplina)
    }else{
        response.status(404)
    }
} )

//Retornando a função anoConclusão
routes.get('/conclusao/aluno/curso/', cors(), async function(request, response, next){
    let ano = request.query.ano 
    let status = request.query.status
    let sigla = request.query.sigla
    let curso = alunosCurso(sigla)

    let alunosConcluidos =  anoConclusao(ano, status, curso) 
    
    

    if(alunosConcluidos){
        response.status(200)
        response.json(alunosConcluidos)
    }else{
        response.status(404)
    }
})

app.use('/.netlify/functions/api',routes);

module.exports = app