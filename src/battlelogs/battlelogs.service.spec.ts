import { Test, TestingModule } from '@nestjs/testing';
import { BattlelogsService } from './battlelogs.service';

describe('BattlelogsService', () => {
  let service: BattlelogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BattlelogsService],
    }).compile();

    service = module.get<BattlelogsService>(BattlelogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
