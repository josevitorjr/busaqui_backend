class Bus {
  busPlate: string;

  latitude: number;

  longitude: number;

  lastUpdateTime: Date;

  constructor({ busPlate, latitude, longitude, lastUpdateTime }: Bus) {
    this.busPlate = busPlate;
    this.latitude = latitude;
    this.longitude = longitude;
    this.lastUpdateTime = lastUpdateTime;
  }
}

export default Bus;
