import { getCustomRepository } from 'typeorm';
import BusesRepository from '../repositories/BusesRepository';
import Bus from '../models/Bus';

interface Request {
  busPlate: string;
  latitude: number;
  longitude: number;
  lastUpdateTime: Date;
}
class CreateBusService {
  public async execute({
    busPlate,
    latitude,
    longitude,
    lastUpdateTime,
  }: Request): Promise<Bus> {
    const busesRepository = getCustomRepository(BusesRepository);

    const findBusWithTheSamePlate = await busesRepository.findByPlate(busPlate);

    if (findBusWithTheSamePlate) {
      throw Error('Already exists a bus with this plate');
    }
    const bus = busesRepository.create({
      busPlate,
      latitude,
      longitude,
      lastUpdateTime,
    });

    await busesRepository.save(bus);

    return bus;
  }
}

export default CreateBusService;
