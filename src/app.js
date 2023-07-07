import express from "express";

//instanciando o express
const app = express();

//código para que a requisição entenda que é em json
app.use(express.json());

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

//procurando um livro pelo id 
app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})


//enviando um cadastro novo
app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado.')
})

//alterando um cadastro 
app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

//função para localizar o livro pelo id
function buscaLivro(id){
    return livros.findIndex(livro=> livro.id == id);
}
export default app