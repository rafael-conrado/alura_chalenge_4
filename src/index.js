import express from "express";
import connectionDb from './config/dbConnect.js';
import routes from './routes/index.js'

connectionDb.on("error", console.log.bind(console, 'Erro de conexão!'));
connectionDb.once('open', () => {
    console.log("Conexão realizada");
});

const app = express();
app.use(express.json())
routes(app);

export default app;