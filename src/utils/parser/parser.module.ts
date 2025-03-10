import { Module } from '@nestjs/common';
import { ParserService } from './parser.service';
import { ParserController } from './parser.controller';

@Module({
  imports: [],
  providers: [ParserService],
  controllers: [ParserController],
})
export class ParserModule {}
