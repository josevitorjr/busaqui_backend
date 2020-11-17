import { Router } from 'express';

import BusesRepository from '../repositories/BusesRepository';
import CreateBusService from '../services/CreateBusService';

const busRouter = Router();

const busesRepository = new BusesRepository();

busRouter.get('/', (request, response) => {
  try {
    const buses = busesRepository.all();

    return response.json(buses);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

busRouter.post('/', (request, response) => {
  try {
    const { busPlate, latitude, longitude, lastUpdateTime } = request.body;

    const createBus = new CreateBusService(busesRepository);

    const bus = createBus.execute({
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

export default busRouter;
