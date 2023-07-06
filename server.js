import app from "./src/app.js";

//definindo a porta do servidor, porta de produção ou porta 3000
const port = process.env.PORT || 3000;


//setamos pro arquivo app porque é lá que está as rotas
app.listen(port, ()=> {
    console.log(`Servidor escutando em http://localhost: ${port}`);
})
