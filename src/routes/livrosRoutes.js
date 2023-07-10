import express from "express";
import livroController from "../controllers/livroController.js";

const router = express.Router();

router
//busca de todos os livros
.get("/livros", livroController.listarLivros);
//enviando um cadastro novo
.post("/livros", livroController.cadastrarLivro);

export default router;