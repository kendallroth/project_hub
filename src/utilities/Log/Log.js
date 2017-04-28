//File:		src/util/Log/Log.js
//Purpose:	Enable logging with several levels of detection

class Log {
	constructor() {
		//Disable instantiating Log class
		throw new TypeError('Log is an abstract class and cannot be implemented');
	}

	/**
	 * Get a list of valid log levels
	 * @return {array} List of valid log levels
	 */
	static getLogLevels() {
		 //List of valid log levels and numerical values (for ranking)
		return [
			{ value: 1, name: 'trace' },
			{ value: 2, name: 'debug' },
			{ value: 3, name: 'info' },
			{ value: 4, name: 'warn' },
			{ value: 5, name: 'error' },
			{ value: 6, name: 'fatal' }
		];
	}

	/**
	 * Verify that a local storage API exists
	 * @return {boolean} Whether local storage API exists
	 */
	static checkLocalStorage() {
		//Check if a Storage API is defined
		return typeof(Storage) !== undefined ? true : false;
	}

	/**
	 * Get the current log level
	 * @return {object} Current log level
	 */
	static getLogLevel() {
		if (this.checkLocalStorage()) {
			//TODO: Validate stored log level and return most basic if not found
			return JSON.parse(localStorage.getItem('loglevel'));
		} else {
			//Return the most basic log level
			this.warn('Log level not retrieved successfully. All log levels will be shown');
			return this.getLogLevels()[0];
		}
	}

	/**
	 * Change the log level
	 * @param {string} levelName Desired log level
	 */
	static setLogLevel(levelName) {
		const levelObject = this.findLogLevel(levelName);

		//Check for storage and validate the log level before setting it
		if (this.checkLocalStorage() && levelObject) {
			localStorage.setItem('loglevel', JSON.stringify(levelObject));
			this.debug(`Set log level to '${levelObject.name}'`)
		} else {
			this.warn('Log level not set successfully. All log levels will be shown.')
		}
	}

	/**
	 * Get a log level from a level name (can be used for validation)
	 * @param  {string} levelName Log level name
	 * @return {object}           Log level object
	 */
	static findLogLevel(levelName) {
		const levelObject = this.getLogLevels().find(level => level.name === levelName);

		if (levelObject !== null) {
			return levelObject;
		}

		this.warn(`'${levelName}' is not a valid Log level`);
		//TODO: Return the most basic log level
		return false;
	}

	/**
	 * Check whether current log level allows attempted log
	 * @param  {string}  levelName Name of attempted log level
	 * @return {boolean}           Whether attempted log level is valid
	 */
	static checkLogLevel(levelName) {
		const attemptedLevelObject = this.findLogLevel(levelName);
		const currentLevelObject = this.getLogLevel();

		return attemptedLevelObject.value >= currentLevelObject.value ? true : false;
	}

	/**
	 * Log a trace message
	 * @param  {string} message Trace message
	 */
	static trace(message) {
		if (this.checkLogLevel('trace')) {
			console.log(`TRACE: ${message}`);
		}
	}

	/**
	 * Log a debug message
	 * @param  {string} message Trace message
	 */
	static debug(message) {
		if (this.checkLogLevel('debug')) {
			console.log(`DEBUG: ${message}`);
		}
	}

	/**
	 * Log a info message
	 * @param  {string} message Info message
	 */
	static info(message) {
		if (this.checkLogLevel('info')) {
			console.info(`INFO: ${message}`);
		}
	}

	/**
	 * Log a warning message
	 * @param  {string} message Warning message
	 */
	static warn(message) {
		if (this.checkLogLevel('warn')) {
			console.warn(`WARN: ${message}`);
		}
	}

	/**
	 * Log an error message
	 * @param  {string} message Error message
	 */
	static error(message) {
		if (this.checkLogLevel('error')) {
			console.error(`ERROR: ${message}`);
		}
	}

	/**
	 * Log a fatal error message
	 * @param  {string} message Fatal error message
	 */
	static fatal(message) {
		if (this.checkLogLevel('fatal')) {
			console.error(`FATAL: ${message}`);
		}
	}
}

export default Log;
