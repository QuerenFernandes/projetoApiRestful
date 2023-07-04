//import do módulo http
const http = require("http");

//definindo a porta do servidor local
const port = 3000;

//criando o servidor
const server = http.createServer((req, res) => {
    //o que o servidor vai devolver, qual a resposta
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('Curso de Node');
});

//a porta que o servidor vai escutar a resposta
server.listen(port, ()=> {
    console.log(`Servidor escutando em http://localhost: ${port}`);
})
