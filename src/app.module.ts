import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogsController } from './logs/logs.controller';
import { LogsService } from './logs/logs.service';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [LogsModule],
  controllers: [AppController, LogsController],
  providers: [AppService, LogsService],
})
export class AppModule {}
