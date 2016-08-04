#! /usr/bin/env node
var shell = require('shelljs');
var chalk = require("chalk");

var error = chalk.bold.red;
var success = chalk.bold.green;

console.log();

if (!process.argv[2]) {
  console.log(error('Error: ') + 'You need to supply a name for your app!\n');
  console.log('Try:  create-react-app-brunch <project-name>\n');
} else {
  var appName = process.argv[2];
  var appDir = shell.pwd().stdout + '/' + appName;
  
  console.log('Creating a new React app in ' + appDir + '.\n');

  shell.exec('PATH=$(npm bin):$PATH brunch new ' + appName + ' -s adrianmc/cra-with-brunch');

  console.log(success('Success! ') + 'Created ' + appName + ' at ' + appDir + '.');
  console.log('Inside that directory, you can run the following commands:\n');

  console.log('* npm start: Starts the development server.');
  console.log('* npm run build: Bundles the app into static files for production.\n');

  console.log('We suggest that you begin by typing:\n')
  console.log('  cd ' + appName);
  console.log('  npm start\n');
  console.log('Happy hacking!')
}
