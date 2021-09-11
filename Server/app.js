const express = require('express');
const cors = require('cors')
const winston = require('winston');

const app = express();
const host = '127.0.0.1';
const port = 4000;

app.use(cors())

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'log/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'log/info.log' }),
    ],
});

require('./controller')(app, logger);
app.listen(port, () => {
    console.log(`Example app listening at http://${host}:${port}`)
})