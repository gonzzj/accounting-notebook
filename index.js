'use strict';

process.env.NODE_CONFIG_DIR = __dirname + '/server/config/';

const chalk = require('chalk');
const app = require('./server/app');
const config = require('config');
const log = console.log;

app.listen(config.port, () => {
	log('Server listening in port ' + config.port);
});

process.on('uncaughtException', function(err, origin) {
	log(chalk.red(`Caught exception: ${err} \n  Exception Origin: ${origin}`));
});

process.on('unhandledRejection', (reason, promise) => {
	log(chalk.red(`Custom Unhandled Rejection at ${reason} \n 'reason:' ${promise}`));
});