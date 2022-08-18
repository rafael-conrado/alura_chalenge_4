import app from './src/index.js';

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Aplicação rodando na posta ${3000}`);
});