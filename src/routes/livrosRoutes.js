import express from "express";
import livroController from "../controllers/livroController.js";

const router = express.Router();

router
//busca de todos os livros
.get("/livros", livroController.listarLivros)

//busca livros por ID
.get("/livros/:id", livroController.listarLivroPorId)

//enviando um cadastro novo
.post("/livros", livroController.cadastrarLivro)

//alterando um cadastro por ID
.put("/livros/:id", livroController.atualizarLivro)

//alterando um cadastro por ID
.delete("livros/:id", livroController.excluirLivro)
export default router;