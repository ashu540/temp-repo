const path=require('path');

console.log(path.sep);

const filePath=path.join('/content','subfolder','test.txt');

console.log(filePath);

const base=path.basename(filePath);
// last value in above given path
console.log(base);

const absolute=path.resolve(__dirname,'content','subfolder','test.txt');

console.log(absolute);