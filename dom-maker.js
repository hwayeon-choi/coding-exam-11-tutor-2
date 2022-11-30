const fs = require('fs');

const readFile = (pathString) => {
  let temp = ""
  const content = fs.readFileSync(pathString, 'utf-8', (err, data) => {
    if (err) throw err;
    return data;
  })
  temp += content;
  return temp;
}

const writeFile = (fileName, contents) => {
  fs.writeFileSync(fileName, contents);
}

const body = readFile('./content/header.txt') + '\n' + readFile('./content/main.txt') + '\n' + readFile('./content/footer.txt');
writeFile('body.txt', body);

const html = readFile('head.txt') + '\n' + readFile('body.txt');
writeFile('index.html', html);