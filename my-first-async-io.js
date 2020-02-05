   var fs = require('fs')
   var file= process.argv[2]
   


fs.readFile(file, (err, test) => {

	 var teststr= test.toString()
     var newlines = teststr.split('\n')
     var x = newlines.length
     var result = x - 1

  if (err) { return console.log(err) }
  else { console.log(result) }

  })
