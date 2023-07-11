import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js";

//criando a conexão com o banco de dados

db.on("error", console.log.bind(console, 'Erro de conexão'));

db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
  });


//instanciando o express
const app = express();

//código para que a requisição entenda que é em json
app.use(express.json());

//instanciando a constante routes
routes(app);

export default app