import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import BusesRepository from '../repositories/BusesRepository';
import CreateBusService from '../services/CreateBusService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const busesRouter = Router();

busesRouter.use(ensureAuthenticated);

busesRouter.get('/', async (request, response) => {
  const busesRepository = getCustomRepository(BusesRepository);

  const buses = await busesRepository.find();

  return response.json(buses);
});

busesRouter.get('/:id', async (request, response) => {
  const busesRepository = getCustomRepository(BusesRepository);

  const { id } = request.params;

  const bus = await busesRepository.findOne({
    where: { id },
  });

  return response.json(bus);
});

busesRouter.post('/', async (request, response) => {
  const { bus_plate, latitude, longitude } = request.body;

  const createBus = new CreateBusService();

  const bus = await createBus.execute({
    bus_plate,
    latitude,
    longitude,
  });

  return response.json(bus);
});

busesRouter.delete('/:id', async (request, response) => {
  const busesRepository = getCustomRepository(BusesRepository);

  const { id } = request.params;

  await busesRepository.delete(id);

  return response.json();
});

export default busesRouter;
