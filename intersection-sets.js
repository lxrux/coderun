const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

rl.on('line', input => {
  lines.push(input);
});

rl.on('close', () => {
  const firstSet = new Set(lines[0].trim().split(/\s+/).map(Number));
  const secondSet = new Set(lines[1].trim().split(/\s+/).map(Number));

  const result = [...secondSet].filter(n => firstSet.has(n)).sort((a, b) => a - b);
  console.log(result.join(' '));
});
