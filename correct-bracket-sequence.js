const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const CORRECT = ['(', ')', '[', ']', '{', '}'];
let str = '';

rl.on('line', input => {
  if (!input) {
    console.log('yes');
    return;
  }

  let stack = [];
  for (let ch of input) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
      continue;
    } else if (ch === ')') {
      let last = stack.pop();
      if (last === '(') {
        continue;
      } else {
        console.log('no');
        return;
      }
    } else if (ch === ']') {
      let last = stack.pop();
      if (last === '[') {
        continue;
      } else {
        console.log('no');
        return;
      }
    } else if (ch === '}') {
      let last = stack.pop();
      if (last === '{') {
        continue;
      } else {
        console.log('no');
        return;
      }
    }
  }

  if (stack.length > 0) {
    console.log('no');
  }
  else {
    console.log('yes');
  }
  rl.close();
});
