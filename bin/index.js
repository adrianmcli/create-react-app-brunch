#! /usr/bin/env node
var shell = require("shelljs");
var chalk = require("chalk");

var error = chalk.bold.red;
var success = chalk.bold.green;

if (!process.argv[2]) {
  console.log(error('You need to supply a name for your app!'));
  console.log();
  console.log('Try:');
  console.log('        create-react-app-brunch <project-name>');
} else {
  var appName = process.argv[2];
  
  console.log('Creating React app with Brunch Skeleton...');
  shell.exec('PATH=$(npm bin):$PATH brunch new ' + appName + ' -s react');

  console.log(success('Success! Your app is done.'))
}
