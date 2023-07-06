//PRIMEIRO ARQUIVO FEITO PARA UTILIZAÇÃO DAS ROTAS. NÃO É USADO MAIS DEVIDO AO MÓDULO DO EXPRESS

//import do módulo http
const http = require("http");

//definindo a porta do servidor local
const port = 3000;

//criando o objeto de rotas 
const rotas = {
    '/': 'Curso de Node',
    '/livros': 'pag de livro',
    '/autores': 'lista autores',
}
//criando o servidor
const server = http.createServer((req, res) => {
    //o que o servidor vai devolver, qual a resposta
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end(rotas[req.url]);
});

//a porta que o servidor vai escutar a resposta
server.listen(port, ()=> {
    console.log(`Servidor escutando em http://localhost: ${port}`);
})
