const fs = require('fs');

const file = process.argv[2];
const source = fs.readFileSync(file, 'utf8');

// ---------------------------------------------
// create blocks
// ---------------------------------------------
const blockStart = />>> ([a-z0-9.\-]+)/;
const blockEnd = /<<</;

if (blockStart.test(source)) {
  let flag = null;
  let lines = null;
  
  for (const line of source.split('\n')) {
    if (!flag) {
      const match = blockStart.exec(line);
      if (match) {
        flag = match[1];
        lines = [];
      }
    } else {
      if (blockEnd.test(line)) {
        fs.writeFileSync(`${file}.${flag}`, lines.join('\n'), {encoding: 'utf8'});
        flag = null;
        lines = null;
      } else {
        lines.push(line);
      }
    }
  }
}