import express from "express";

//instanciando o express
const app = express();

//criando o array de livro
const livros = [
    {id: 1, "titulo": "Senhor dos anéis"},
    {id: 2, "titulo": "O hobbit"}
]

//o que acontece quando fizer a requisição pra essa rota
app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
})

//escolho o json para que ele retorne o conteúdo
app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado.')
})

export default app