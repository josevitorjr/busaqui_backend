import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  email: string;

  @Column('float')
  latitude: number;

  @Column('float')
  longitude: number;

  @Column('timestamp with time zone')
  lastUpdateTime: Date;
}

export default User;
