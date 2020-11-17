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

busRouter.get('/:busPlate', async (request, response) => {
  try {
    const busesRepository = getCustomRepository(BusesRepository);
    const { busPlate } = request.params;
    const bus = await busesRepository.findOne({
      where: { busPlate },
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

busRouter.delete('/:busPlate', async (request, response) => {
  try {
    const busesRepository = getCustomRepository(BusesRepository);
    const { busPlate } = request.params;

    await busesRepository.delete(busPlate);

    return response.json();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default busRouter;
