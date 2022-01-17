import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
	TypeOrmModule.forRoot({
		type: 'postgres',
		host: 'localhost',
		port: 5432,
		username: 'postgres',
		password: 'test',
		database: 'exchange_market',
		entities: [],
		synchronize: true,
	}),
  ]
})

export class AppModule {
	constructor (private connection: Connection) {}
}
