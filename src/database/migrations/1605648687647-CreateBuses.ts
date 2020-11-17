import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateBuses1605648687647 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'buses',
        columns: [
          {
            name: 'busPlate',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'latitude',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'longitude',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'lastUpdateTime',
            type: 'timestamp with time zone',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('buses');
  }
}
