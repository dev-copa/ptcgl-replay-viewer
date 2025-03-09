import { Test, TestingModule } from '@nestjs/testing';
import { ParserController } from './parser.controller';
import { ParserService } from './parser.service';

describe('BattlelogsController', () => {
  let controller: ParserController;
  let service: ParserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParserController],
      providers: [ParserService],
    }).compile();

    controller = module.get<ParserController>(ParserController);
    service = module.get<ParserService>(ParserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getLogs', () => {
    it('should return an empty object', () => {
      expect(controller.getLogs()).toEqual({});
    });
  });

  describe('parseLogs', () => {
    it('should return parseLogs on the service and return the result', async () => {
      const mockLogs = 'Turn #1\nAction 1\nAction 2\nTurn #2\nAction 3';
      const mockResult = {
        format: 'json',
        data: {
          turns: [
            { turn_id: 'Turn_1', actions: ['Action 1', 'Action 2'] },
            { turn_id: 'Turn_2', actions: ['Action 3'] },
          ],
        },
      };

      jest.spyOn(service, 'parseLogs').mockResolvedValue(mockResult);

      const result = await controller.parseLogs({
        battleLogs: mockLogs,
        outputFormat: 'json',
      });
      expect(service.parseLogs).toHaveBeenCalledWith(mockLogs);
      expect(result).toEqual(mockResult);
    });
  });
});
