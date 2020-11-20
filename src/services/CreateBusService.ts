import { getCustomRepository } from 'typeorm';

import BusesRepository from '../repositories/BusesRepository';
import Bus from '../models/Bus';
import AppError from '../errors/appError';

interface Request {
  bus_plate: string;
  latitude: number;
  longitude: number;
}
class CreateBusService {
  public async execute({
    bus_plate,
    latitude,
    longitude,
  }: Request): Promise<Bus> {
    const busesRepository = getCustomRepository(BusesRepository);

    const findBusWithTheSamePlate = await busesRepository.findByPlate(
      bus_plate,
    );

    if (findBusWithTheSamePlate) {
      throw new AppError('Already exists a bus with this plate');
    }
    const bus = busesRepository.create({
      bus_plate,
      latitude,
      longitude,
    });

    await busesRepository.save(bus);

    return bus;
  }
}

export default CreateBusService;
