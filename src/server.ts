import express from 'express';
import compression from 'compression';
import { createServer } from 'http';

const app = express();

const PORT = 2916;
const httpServer = createServer(app);

app.use(compression());

app.get('/',(req,res) => {
    res.send('<h1>Bienvenido!!!</h1>');
});

httpServer.listen(PORT,() => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})



