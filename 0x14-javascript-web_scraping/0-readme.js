#!/usr/bin/node

const fs = require('fs');

if (process.argv.length > 2) {
  let data;
  fs.readFile(process.argv[2], (err, _data) => {
    if (err) {
      // Improve error message:
      console.error(`Error reading file "${process.argv[2]}":`, err);
    } else {
      data = _data;
      console.log(data.toString('utf-8'));
    }
  });
}
