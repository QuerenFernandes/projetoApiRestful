import mongoose from "mongoose";

//criando schema do livro
const livroSchema = new mongoose.Schema(
    {
    id: {type: String},
    titulo: {type: String, required: true},
    //linha alterada para que faça a ligação entre os schemas
    autor: {type: mongoose.Schema.Types.Objected, ref: 'autores', required: true},
    editora: {type: String, required: true},
    numeroPaginas: {type: Number}
    }   
);

//variável que abrange todos os livros
const livros = mongoose.model('livros', livroSchema);

export default livros;

