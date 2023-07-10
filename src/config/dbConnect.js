//importando o mongoose
import mongoose from "mongoose";

//criando a requisição com o link que o site cria. Alterações realizadas conforme orientação no curso.
mongoose.connect("mongodb+srv://queren:123@apirestful.huh6rxx.mongodb.net/api-node");

//variável para exportar a funcionalidade do db.
let db = mongoose.connection;

//exportando a variável
export default db;