import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { EmployeesModule } from './employees/employees.module';

@Module({
  // used config module to load the environment variables
  imports: [UsersModule, DatabaseModule ,ConfigModule.forRoot(),EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
