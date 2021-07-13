const {transports, createLogger, format} = require('winston')

const logger = createLogger({
    format: format.combine(
        format.errors({stack: true}),
        format.timestamp({format: "DD-MM-YY HH:mm:SS"}),
        format.json()
    ),
    transports: [
        new transports.File({ filename: 'error.log', level: 'error'}),
        new transports.File({ filename: 'info.log', level: 'info'})
    ]
})

// ADD LOGGER 
logger.add(new transports.Console({
    format: format.simple()
}))

module.exports = logger