import Bus from '../models/Bus';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class BusesRepository {
  private buses: Bus[];

  constructor() {
    this.buses = [];
  }

  public all(): Bus[] {
    return this.buses;
  }

  public create({ busPlate, latitude, longitude, lastUpdateTime }: Bus): Bus {
    const bus = new Bus({ busPlate, latitude, longitude, lastUpdateTime });

    this.buses.push(bus);

    return bus;
  }
}

export default BusesRepository;
