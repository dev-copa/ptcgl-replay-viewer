import { Test, TestingModule } from '@nestjs/testing';
import { BattlelogsController } from './battlelogs.controller';

describe('BattlelogsController', () => {
  let controller: BattlelogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BattlelogsController],
    }).compile();

    controller = module.get<BattlelogsController>(BattlelogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
