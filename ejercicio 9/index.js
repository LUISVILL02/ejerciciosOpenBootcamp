const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

const customError = (message) => {
    if(message === "hola mundo") return message;
    throw new Error(" Inicio incorrecto!");
} 

const message = customError("hola");

try {
    logger.info(message);
} catch (e) {
    logger.error(e);
}