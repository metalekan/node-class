const { readFile, writeFile } = require("fs");

console.log('Start')
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    const first = result;
    readFile("./content/second.txt", "utf-8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        const second = result;
        writeFile(
          "./content/result-async.txt",
          `Here is the result: ${first} ${second}`,
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              console.log('Done this is the result:', result );
            }
          }
        );
      }
    });
  }
});

console.log('Starting next task')
