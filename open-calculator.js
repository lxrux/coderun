const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lines = [];

rl.on('line', input => {
  lines.push(input);
});

rl.on('close', () => {
  const keyboard = new Set(lines[0].trim().split(' '));
  const numSet = new Set(lines[1].split(''));

  const addedKeys = new Set();
  [...numSet].forEach(n => {
    if (!keyboard.has(n)) {
      addedKeys.add(n);
    };
  });

  console.log(addedKeys.size);
});