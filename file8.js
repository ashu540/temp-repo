
 const { readFileSync,writeFileSync} = require('fs');
// fs=require('fs); --> fs.readFileSync
 const first = readFileSync('./content/first.txt', 'utf8')
 const second = readFileSync('./content/second.txt', 'utf8')

  console.log(first,second);

  writeFileSync('./content/result.txt',`Here is the result: ${first} , ${second}`,{flag: 'a'});