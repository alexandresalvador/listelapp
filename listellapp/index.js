const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

//Rota para lista todos os estabelecimentos cadastrados
app.get('/', function(req, res) {
    res.render('index')
});

//Rota para exibir a página de cadastro de estabelecimentos
app.get('/cadastro', function(req, res) {
    res.render('novo')
});

//Rota para salvar as informações.
app.post('/salvar-ponto', (req, res) => {
    let title = req.body.titulo;
    let description = req.body.descricao;
    console.log(`Salvo:`);
});

//Rota para exibir um estabelecimento.
app.get('/listar/:id', function(req, res) {
    res.render('estabelecimento')
});

//Rota para salvar um feedback sobre o estabelecimento
  app.post('/salvar-feedback', (req, res) => {
        let title = req.body.titulo;
        let description = req.body.descricao;
        console.log(`Salvo:`);
    });  

    app.listen(9000, (erro) => {
        if(erro) {
            console.log(erro, 'Erro, servidor fora do ar!');
        } else {
            console.log('Servidor rodando aqui: http://localhost:9000');
        }
    });