var {defineTypeLogs, log} = require('./codetrack');

// define the type of logs that will be displayed
// all, debug, error, warning, info
defineTypeLogs(['debug', 'error', 'warning', 'info'])

// Logs types
//debug
log('log debug 1', 'debug')
log('log debug 2', 'debug')
log('log debug 3', 'debug')


// warning
log('log warning 1', 'warning')
log('log warning 2', 'warning')
log('log warning 3', 'warning')

// error
log('log error 1', 'error')
log('log error 2', 'error')
log('log error 3', 'error')

// info
log('log info 1', 'info')
log('log info 2', 'info')
log('log info 3', 'info')
