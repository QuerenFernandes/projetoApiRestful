import livros from "../Models/Livro.js";

class livroController {
    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            //escolho o json para que ele retorne o conteúdo
            res.status(200).json(livros);
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro`});
            } else {
                res.status(201).send(livro.toJson());
            }
        })
    }
}

export default livroController