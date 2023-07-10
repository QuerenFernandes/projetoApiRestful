import express from "express";
import db from "./config/dbConnect.js"
import livros from "./Models/Livro.js";
import routes from "./routes/index.js";

//criando a conexão com o banco de dados

db.on("error", console.log.bind(console, 'Erro de conexão'));

db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
  });


//instanciando o express
const app = express();

//código para que a requisição entenda que é em json
app.use(express.json());

//instanciando a constante routes
routes(app);

//criando o array de livro
//const livros = [
//    {id: 1, "titulo": "Senhor dos anéis"},
//    {id: 2, "titulo": "O hobbit"}
//]

//procurando um livro pelo id 
app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
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