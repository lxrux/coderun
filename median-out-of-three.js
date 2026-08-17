const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
    let numbers = input.split(' ');
    console.log(numbers.sort((a,b) => a - b)[parseInt(numbers.length / 2)]);
    
    rl.close();
});
