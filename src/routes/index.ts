import { Router } from 'express';
import busesRouter from './buses.routes';
import usersRouter from './users.routes';
import sesionsRouter from './sessions.routes';

const routes = Router();

routes.use('/buses', busesRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sesionsRouter);

export default routes;
