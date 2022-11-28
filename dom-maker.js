const fs = require('fs');

fs.readdir("./content", (err, fileNameElement) => {
  let data = [];
  if (err)  throw err; 
  console.log(fileNameElement);
  data += fileNameElement.map((fileName) => {
    return fileName;
  })
  const testJSON = JSON.stringify(fileNameElement, null, 2);
  fs.writeFileSync("./content/test.json", testJSON);
  console.log(data);
});
