import mongoose from "mongoose";

//criando schema do livro
const livroSchema = new mongoose.Schema(
    {
    id: {type: String},
    titulo: {type: String, required: true},
    autor: {type: String, required: true},
    editora: {type: String, required: true},
    numeroPaginas: {type: Number}
    }   
);

//variável que abrange todos os livros
const livros = mongoose.model('livros', livroSchema);

export default livros;

