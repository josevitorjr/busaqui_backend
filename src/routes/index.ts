import { Router } from 'express';
import busRouter from './buses.routes';
import userRouter from './users.routes';

const routes = Router();

routes.use('/buses', busRouter);
routes.use('/users', userRouter);

export default routes;
