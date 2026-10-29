const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', input => {
  let stack = [];
  for (let el of input.trim().split(' ')) {
    if (el === '+') {
      let o1 = stack.pop();
      let o2 = stack.pop();
      stack.push(o1 + o2);
    }
    else if (el === '-') {
      let o1 = stack.pop();
      let o2 = stack.pop();
      stack.push(o2 - o1);
    }
    else if (el === '*') {
      let o1 = stack.pop();
      let o2 = stack.pop();
      stack.push(o2 * o1);
    }
    else {
      stack.push(parseInt(el));
    }
  }

  console.log(stack.pop());
  rl.close();
});
