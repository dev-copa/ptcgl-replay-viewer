import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { BattlelogsService } from './battlelogs.service';

@Controller('battlelogs')
export class BattlelogsController {
  constructor(private readonly battlelogsService: BattlelogsService) {}

  @Get()
  @Render('index')
  getLogs() {
    return {};
  }

  @Post('parsed')
  async parseLogs(@Body() body: { battleLogs: string; outputFormat: string }) {
    return await this.battlelogsService.parseLogs(body.battleLogs);
  }
}
