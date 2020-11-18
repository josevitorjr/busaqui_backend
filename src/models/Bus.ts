import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('buses')
class Bus {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  busPlate: string;

  @Column('float')
  latitude: number;

  @Column('float')
  longitude: number;

  @Column('timestamp with time zone')
  lastUpdateTime: Date;
}

export default Bus;
