import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParserService } from './utils/parser/parser.service';
import { ParserController } from './utils/parser/parser.controller';
import { ParserModule } from './utils/parser/parser.module';

@Module({
  imports: [ParserModule],
  controllers: [AppController, ParserController],
  providers: [AppService, ParserService],
})
export class AppModule {}
