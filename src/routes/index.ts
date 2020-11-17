import { Router } from 'express';
import busRouter from './buses.routes';

const routes = Router();

routes.use('/buses', busRouter);

export default routes;
