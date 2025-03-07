import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BattlelogsService } from './battlelogs/battlelogs.service';
import { BattlelogsController } from './battlelogs/battlelogs.controller';
import { BattlelogsModule } from './battlelogs/battlelogs.module';

@Module({
  imports: [BattlelogsModule],
  controllers: [AppController, BattlelogsController],
  providers: [AppService, BattlelogsService],
})
export class AppModule {}
