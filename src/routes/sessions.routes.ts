import { Router } from 'express';

// import CreateSessionService from '../services/CreateSessionService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    return response.json({});
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
