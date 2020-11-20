import express from 'express';

import ItemsController from './controllers/ItemsController';

const routes = express.Router();

const items = ItemsController;

routes.get('/items', items.index);
routes.post('/items', items.insert);
routes.put('/items', items.update);
routes.delete('/items', items.delet);

export default routes;