import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        //o que acontece quando fizer a requisição pra essa rota
        res.status(200).send({titulo:"Curso de node com MongoDb"})
    });

    //chamando o arquivo de rotas
    app.use()
    express.json(),
    livros,
    autores
}

export default routes