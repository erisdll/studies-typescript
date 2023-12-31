import fs from 'fs';

const matches = fs
  .readFileSync('./football.csv', {
    encoding: 'utf8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

enum MatchResult {
  HomeWin = 'H',
  Draw = 'D',
  AwayWin = 'A',
}

let manUnitedWins = 0;
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United Wins: ${manUnitedWins} games`);
