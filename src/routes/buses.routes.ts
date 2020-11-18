import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import BusesRepository from '../repositories/BusesRepository';
import CreateBusService from '../services/CreateBusService';

const busRouter = Router();

busRouter.get('/', async (request, response) => {
  try {
    const busesRepository = getCustomRepository(BusesRepository);

    const buses = await busesRepository.find();

    return response.json(buses);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

busRouter.get('/:id', async (request, response) => {
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

busRouter.post('/', async (request, response) => {
  try {
    const { busPlate, latitude, longitude, lastUpdateTime } = request.body;

    const createBus = new CreateBusService();

    const bus = await createBus.execute({
      busPlate,
      latitude,
      longitude,
      lastUpdateTime,
    });

    return response.json(bus);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

busRouter.delete('/:id', async (request, response) => {
  try {
    const busesRepository = getCustomRepository(BusesRepository);

    const { id } = request.params;

    await busesRepository.delete(id);

    return response.json();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default busRouter;
