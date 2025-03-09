import { Test, TestingModule } from '@nestjs/testing';
import { ParserService } from './parser.service';

describe('BattlelogsService', () => {
  let service: ParserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParserService],
    }).compile();

    service = module.get<ParserService>(ParserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('parseLogs', () => {
    it('should parse logs correctly', async () => {
      const mockLogs = 'Turn #1\nAction 1\nAction 2\nTurn #2\nAction 3';
      const expectedResult = {
        format: 'json',
        data: {
          turns: [
            { turn_id: 'Turn_1', actions: ['Action 1', 'Action 2'] },
            { turn_id: 'Turn_2', actions: ['Action 3'] },
          ],
        },
      };

      const result = await service.parseLogs(mockLogs);
      expect(result).toEqual(expectedResult);
    });

    it('should handle empty logs', async () => {
      const mockLogs = '';
      const expectedResult = {
        format: 'json',
        data: { turns: [] },
      };

      const result = await service.parseLogs(mockLogs);
      expect(result).toEqual(expectedResult);
    });

    it('should handle logs without turns', async () => {
      const mockLogs = 'Action 1\nAction 2\nAction 3';
      const expectedResult = {
        format: 'json',
        data: { turns: [] },
      };

      const result = await service.parseLogs(mockLogs);
      expect(result).toEqual(expectedResult);
    });

    it('should handle logs with actions outside of turns', async () => {
      const mockLogs =
        'Action 1\nTurn #1\nAction 2\nAction 3\nTurn #2\nAction 4';
      const expectedResult = {
        format: 'json',
        data: {
          turns: [
            { turn_id: 'Turn_1', actions: ['Action 2', 'Action 3'] },
            { turn_id: 'Turn_2', actions: ['Action 4'] },
          ],
        },
      };

      const result = await service.parseLogs(mockLogs);
      expect(result).toEqual(expectedResult);
    });
  });
});
