import { EntityRepository, Repository } from 'typeorm';
import Bus from '../models/Bus';

@EntityRepository(Bus)
class BusesRepository extends Repository<Bus> {
  public async findByPlate(bus_plate: string): Promise<Bus | null> {
    const findBus = await this.findOne({
      where: { bus_plate },
    });

    return findBus || null;
  }
}

export default BusesRepository;
