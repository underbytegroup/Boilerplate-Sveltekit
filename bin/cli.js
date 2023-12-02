#!/usr/bin/env node

import { execSync } from 'child_process';

// const { execSync } = require('child_process');
const runCommand = (command) => {

	try {
		execSync(`${command}`, { stdio: 'inherit' });
	} catch (error) {
		console.error(`Failed to execute the ${command}`, 0);
		console.log(error);
		return false;
	}
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Endabelyu/boilerplate-svelte  ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);

const installDependencies = runCommand(installDepsCommand);

if (!installDependencies) process.exit(-1);

console.log(
	'Boilerplate Svelte Succesfully installed, follow the following commands to run the application'
);
