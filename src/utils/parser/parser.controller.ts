import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { ParserService } from './parser.service';

@Controller('parser')
export class ParserController {
  constructor(private readonly battlelogsService: ParserService) {}

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
