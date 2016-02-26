var fs = require('fs')
fs.readFile('./customers.json', {encoding: 'utf8'}, function(error, jsonString){
  try {
    var data = JSON.parse(jsonString)
  } catch(e) {
    console.log(e)
  }
  console.log(data.length, data[2].email)
})
