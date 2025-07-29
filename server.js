const express = require('express');
const { MongoClient, ObjectId } = require('mongodb')

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// PÁGINA INDEX
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// PÁGINA OPTION
app.get('/option', (req, res) => {
    res.sendFile(__dirname + '/pages/escolhaLogin.html');
});

// PÁGINA CADASTRO MÉDICO
app.get('/cadastroMedico', (req, res) => {
    res.sendFile(__dirname + '/pages/cadastroMedico.html');
});

// PÁGINA CADASTRO PACIENTE
app.get('/cadastroPaciente', (req, res) => {
    res.sendFile(__dirname + '/pages/cadastroPaciente.html');
});

// PÁGINA LOGIN MÉDICO
app.get('/loginMedico', (req, res) => {
    res.sendFile(__dirname + '/pages/loginMedico.html');
});

// PÁGINA LOGIN PACIENTE
app.get('/loginPaciente', (req, res) => {
    res.sendFile(__dirname + '/pages/loginPaciente.html');
});

app.listen(port, () => {
    console.log(`Servidor Node.js em execução em http://localhost:${port}`);
});
