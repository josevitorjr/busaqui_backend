import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import BusesRepository from '../repositories/BusesRepository';
import CreateBusService from '../services/CreateBusService';

const busesRouter = Router();

busesRouter.get('/', async (request, response) => {
  try {
    const busesRepository = getCustomRepository(BusesRepository);

    const buses = await busesRepository.find();

    return response.json(buses);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

busesRouter.get('/:id', async (request, response) => {
  try {
    const busesRepository = getCustomRepository(BusesRepository);

    const { id } = request.params;

    const bus = await busesRepository.findOne({
      where: { id },
    });

    return response.json(bus);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

busesRouter.post('/', async (request, response) => {
  try {
    const { bus_plate, latitude, longitude } = request.body;

    const createBus = new CreateBusService();

    const bus = await createBus.execute({
      bus_plate,
      latitude,
      longitude,
    });

    return response.json(bus);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

busesRouter.delete('/:id', async (request, response) => {
  try {
    const busesRepository = getCustomRepository(BusesRepository);

    const { id } = request.params;

    await busesRepository.delete(id);

    return response.json();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default busesRouter;
