import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('buses')
class Bus {
  @PrimaryColumn('varchar')
  busPlate: string;

  @Column('float')
  latitude: number;

  @Column('float')
  longitude: number;

  @Column('timestamp with time zone')
  lastUpdateTime: Date;
}

export default Bus;
