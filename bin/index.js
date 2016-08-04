#! /usr/bin/env node
var shell = require('shelljs');
var spawn = require('cross-spawn');
var exec = require('child_process').exec;
var chalk = require("chalk");

var error = chalk.bold.red;
var success = chalk.bold.green;

console.log();

if (!process.argv[2]) {
  console.error(error('You need to supply a name for your app!\n'));
  console.log('Try:  create-react-app-brunch <project-name>\n');
  process.exit(1);
} else {
  var appName = process.argv[2];
  var appDir = process.cwd() + '/' + appName;
  
  console.log('Creating a new React app in ' + appDir + '.\n');

  var repoUrl = 'https://github.com/adrianmc/cra-with-brunch.git';
  cloneSkeleton(appName, repoUrl, function(err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Skeleton successfully cloned.\n');
    installPackages(appName);
    printSuccessMsg(appName, appDir);
    process.exit(0);
  });
}

function cloneSkeleton(appName, repoUrl, callback) {
  console.log('Cloning from skeleton...\n');

  var cmd = 'git clone ' + repoUrl + ' ' + appName;
  exec(cmd, function(error, stdout, stderr) {
    if (error != null) {
      return callback(new Error("Git clone error: " + stderr.toString()));
    }
    return callback();
  });
}

function installPackages(appName) {
  console.log('Installing packages...');
  shell.cd(appName);
  spawn.sync('npm', ['install'], { stdio: 'inherit' });
  shell.cd('..');
  console.log('Packages installed!\n');
}

function printSuccessMsg(appName, appDir) {
  console.log(success('Success! ') + 'Created ' + appName + ' at ' + appDir + '.');
  console.log('Inside that directory, you can run the following commands:\n');

  console.log('* npm start: Starts the development server.');
  console.log('* npm run build: Bundles the app into static files for production.\n');

  console.log('We suggest that you begin by typing:\n')
  console.log('  cd ' + appName);
  console.log('  npm start\n');
  console.log('Happy hacking!')
}