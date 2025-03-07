import { Injectable } from '@nestjs/common';

@Injectable()
export class BattlelogsService {
  async parseLogs(logs: string) {
    const parsed = this.processLogs(logs);
    return { format: 'json', data: parsed };
  }

  private processLogs(log: string) {
    const lines = log
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line);

    const turns = [];
    let currentTurn = null;
    let turnCounter = 0;

    lines.forEach((line) => {
      if (line.startsWith('Turn #')) {
        if (currentTurn) turns.push(currentTurn);
        turnCounter++;
        currentTurn = {
          turn_id: `Turn_${turnCounter}`,
          actions: [],
        };
      } else if (currentTurn) {
        currentTurn.actions.push(line);
      }
    });

    if (currentTurn) turns.push(currentTurn);

    return { turns };
  }
}
