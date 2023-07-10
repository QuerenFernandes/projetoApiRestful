import express from "express";
import livros from "./livrosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        //o que acontece quando fizer a requisição pra essa rota
        res.status(200).send({titulo:"Curso de node com MongoDb"})
    });

    app.use()
    express.json(),
    livros
}

export default routes