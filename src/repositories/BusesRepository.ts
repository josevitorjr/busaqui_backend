import { EntityRepository, Repository } from 'typeorm';
import Bus from '../models/Bus';

@EntityRepository(Bus)
class BusesRepository extends Repository<Bus> {
  public async findByPlate(busPlate: string): Promise<Bus | null> {
    const findBus = await this.findOne({
      where: { busPlate },
    });

    return findBus || null;
  }
}

export default BusesRepository;
