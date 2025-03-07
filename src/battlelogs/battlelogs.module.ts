import { Module } from '@nestjs/common';
import { BattlelogsService } from './battlelogs.service';
import { BattlelogsController } from './battlelogs.controller';

@Module({
  imports: [],
  providers: [BattlelogsService],
  controllers: [BattlelogsController],
})
export class BattlelogsModule {}
