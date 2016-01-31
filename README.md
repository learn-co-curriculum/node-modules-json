# Importing JSON files

## Overview

This lesson will cover how and why you would import JSON files.

## Objectives

1. Describe how to import JSON files using provided example: configurations, data, settings
1. Describe why you'd need to have JSON files

## Reading JSON Files

JSON stands for JavaScript Object Notation. It's a widely use data format. When it comes to Node applications, developers like to use JSON file to store various data such as:

* Configurations
* Seed data (initial data to populate the development or test database)
* Settings
* Plugins for frameworks


Let's implement code which reads a JSON file and parses the file data into JavaScript object:

```js
var fs = require('fs')
fs.readFile('./customers.json', {encoding: 'utf8'}, function(error, jsonString){
  try {
    var data = JSON.parse(jsonString)
  } catch(e) {
    console.log(e)
  }
  console.log(data.length, data[2].email)
})
```

The fact that we can access property `data[2].email` tells us that `data` is a JavaScript/Node object and not a JSON string.

All the code above can be replaced with one line where we use `require()`:

```js
var data = require('./customers.json')
console.log(data.length, data[2].email)
```

So `require()` not only imports JavaScript and executes files, but also reads and parses JSON files.

## Static Configuration

Sometime you need to have some static configuration. You can use the module for it, e.g.,

```js
module.exports = {
    url: 'http://webapplog.com',
    name: 'React Quicly',
    port: 3000,
    apiKey: '34EC5CE9-CD02-4C4E-B5D9-D7CEF2F12F2C'
}
```

And then in the main file: `var config = require('./config.js')`. 

An alternative and maybe better way would be to use a JSON file:

```js
{
    "url": "http://webapplog.com",
    "name": "React Quicly",
    "port": 3000,
    "apiKey": "34EC5CE9-CD02-4C4E-B5D9-D7CEF2F12F2C"
}
```

And the same `require()` in the main file (file which imports the configurations):

```
var config = require('./config.js')
```

Note: In JSON file you **must use double quotes** around not only string values, but also all keys/properties. Also, the file must have only one root element (the main parent element): an array or an object.

## Omitting Extension

So you can require both JSON and JS files. It's possible to omit a file extension. In this case `.js` files take priority over `.json` files. For example, there are two files `customers.json` and `customers.js` with the same names but different extensions. If we have this code (`req-no-ext.js`), node will take the data from `customer.js`

```js
var data = require('./customers')
console.log(data.length, data[2].email)
```

If there's only `.json` file, then Node will use JSON.

## Resources

1. [You Can Use require() To Load JSON (JavaScript Object Notation) Files In Node.js video](http://www.bennadel.com/blog/2908-you-can-use-require-to-load-json-javascript-object-notation-files-in-node-js.htm)
1. [JSON generator: random JSON data generator](http://www.json-generator.com/)
1. []()


---

<a href='https://learn.co/lessons/node-modules-json' data-visibility='hidden'>View this lesson on Learn.co</a>
