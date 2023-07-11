import autores from "../models/Autor.js";

class AutorController {
    //busca de todos os autores
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            //escolho o json para que ele retorne o conteúdo
            res.status(200).json(autores);
        })
    }

    //busca autores por ID
    static listarAutorPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) =>{
            if(err){
                res.status(400).send({message: `${err.message} - Id do Autor não localizado.`})
            } else {
                res.status(200).send(autores);
            }
        })
    }

    //enviando um cadastro novo
    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar autor`});
            } else {
                res.status(201).send(autor.toJson());
            }
        })
    }

    //alterando um cadastro
    static atualizarAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Autor atualizado com sucesso!'});
            } else {
                res.status(500).send({message: err.message});
            }
        })

    }

    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'autor Removido com sucesso'});
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default AutorController