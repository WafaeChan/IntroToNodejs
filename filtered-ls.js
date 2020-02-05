const fs = require("fs");
const path = require("path");

const mylist = process.argv[2];
const ext = "." + process.argv[3];


fs.readdir(mylist, (err, list) => {
  if (err) {
    return console.error(err);
  }

  for (let l of list) {
    if (path.extname(l) === ext) {
      console.log(l);
    }
  }
})