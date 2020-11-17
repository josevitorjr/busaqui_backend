import BusesRepository from '../repositories/BusesRepository';
import Bus from '../models/Bus';

class CreateBusService {
  private busesRepository: BusesRepository;

  constructor(busesRepository: BusesRepository) {
    this.busesRepository = busesRepository;
  }

  public execute({ busPlate, latitude, longitude, lastUpdateTime }: Bus): Bus {
    const bus = this.busesRepository.create({
      busPlate,
      latitude,
      longitude,
      lastUpdateTime,
    });

    return bus;
  }
}

export default CreateBusService;
