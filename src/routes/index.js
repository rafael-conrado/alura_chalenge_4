import express from 'express';
import receitas from './receitasRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ message: "rota principal ok!" })
    });

    app.use(
        express.json(),
        receitas
    )
}

export default routes;