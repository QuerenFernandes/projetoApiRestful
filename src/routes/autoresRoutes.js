import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
//busca de todos os livros
.get("/autores", AutorController.listarAutores)

//busca autores por ID
.get("/autores/:id", AutorController.listarAutorPorId)

//enviando um cadastro novo
.post("/autores", AutorController.cadastrarAutor)

//alterando um cadastro por ID
.put("/autores/:id", AutorController.atualizarAutor)

//alterando um cadastro por ID
.delete("autores/:id", AutorController.excluirAutor)
export default router;