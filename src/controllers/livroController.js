import livros from "../Models/Livro.js";

class livroController {
    //busca de todos os livros
    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            //escolho o json para que ele retorne o conteúdo
            res.status(200).json(livros);
        })
    }

    //busca livros por ID
    static listarLivroPorId = (req, res) => {
        const id = req.params.id;

        livros.findById(id, (err, livros) =>{
            if(err){
                res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
            } else {
                res.status(200).send(livros);
            }
        })
    }

    //enviando um cadastro novo
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

    //alterando um cadastro
    static atualizarLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro atualizado com sucesso!'});
            } else {
                res.status(500).send({message: err.message});
            }
        })

    }

    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro Removido com sucesso'});
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default livroController