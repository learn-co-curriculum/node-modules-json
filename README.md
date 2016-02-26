# Importing JSON files

## Overview

JSON is a widely use data format. When it comes to Node applications, developers like to use JSON file to store various data such as:

* Configurations
* Seed data (initial data to populate the development or test database)
* Settings
* Plugins for frameworks

Let's implement code which reads a JSON file and parses the file data into JavaScript object (`read.js`). The `customers.json` has information about customers including their emails, balance, phone numbers and addresses. Please don't share this information with anyone.

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

The fact that we can access property `data[2].email` tells us that `data` is a JavaScript/Node object and not a JSON string. The file has an array that's why we can get its length and access the third item. The items have property `email` among others.

Okay, we know the code works, but can we do better? Do we have to `try` and `parse` for every JSON file. It's JavaScript after all.

This lesson will cover how you can import JSON files effortlessly.

## Objectives

1. Import JSON files using provided example: configurations, data, settings
1. Describe why you'd need to have JSON files

## Importing JSON Files

When we need to access a JSON file, all the code above can be replaced with one line where we use `require()` (the `req.js` file for you to follow along with the real code):

```js
var data = require('./customers.json')
console.log(data.length, data[2].email)
```

To run the example, use `node read` and `node req`.

So `require()` not only imports JavaScript and executes files, but also reads and parses JSON files.


## Static Configuration

Sometimes you need to have some static configurations like, port numbers, URLs, names, keys which never change. One approach would be to use the Node module for it:

```js
// config.js
module.exports = {
    url: 'http://webapplog.com',
    name: 'React Quicly',
    port: 3000,
    apiKey: '34EC5CE9-CD02-4C4E-B5D9-D7CEF2F12F2C'
}
```

That's the `config.js` file. And then, in the main file you can implement `var config = require('./config.js')` to use the static configurations.

An alternative and maybe a better way would be to format it as JSON (`config.json`):

```js
{
    "url": "http://webapplog.com",
    "name": "React Quicly",
    "port": 3000,
    "apiKey": "34EC5CE9-CD02-4C4E-B5D9-D7CEF2F12F2C"
}
```

And the same `require()` in the main file (file which imports the configurations):

```js
// read-config.js
var config = require('./config.js')
console.log(config)
```

Note: In a JSON file you **must use double quotes** around not only string values, but also all keys/properties. Also, the file must have only one root element (the main parent element): an array or an object. Last, you **cannot** put comments in JSON. ;(

## Omitting Extension

So you can require both JSON and JS files. It is also possible to omit a file extension. If you do that, `.js` files take priority over `.json` files. For example, there are two files `customers.json` and `customers.js` with the same names but different extensions. If we have this code (`req-no-ext.js`), node will take the data from `customer.js`

```js
var data = require('./customers')
console.log(data.length, data[2].email)
```

If there's only `.json` file, then Node will use JSON.

Note: to run this example, execute `node req-no-ext.js` and compare the results with `node req.js`.

## Resources

1. [You Can Use require() To Load JSON (JavaScript Object Notation) Files In Node.js video](http://www.bennadel.com/blog/2908-you-can-use-require-to-load-json-javascript-object-notation-files-in-node-js.htm)
1. [JSON generator: random JSON data generator](http://www.json-generator.com/)


---

<a href='https://learn.co/lessons/node-modules-json' data-visibility='hidden'>View this lesson on Learn.co</a>
