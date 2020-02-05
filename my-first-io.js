   var fs = require('fs')
   var file= process.argv[2]
   var test = fs.readFileSync(file)
   var teststring= test.toString()
   var newlines = teststring.split('\n')
   var x = newlines.length
   var result = x - 1


  console.log(result)

