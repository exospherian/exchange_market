import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
	TypeOrmModule.forRoot({
		type: 'postgres',
		host: 'localhost',
		port: 5432,
		username: 'test',
		password: 'test',
		database: 'exchange_market',
		entities: [],
		synchronize: true,
	}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
