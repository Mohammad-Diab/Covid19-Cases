const express = require('express');
const cors = require('cors')

const app = express();
const host = '127.0.0.1';
const port = 4000;

app.use(cors())

require('./controller')(app);
app.listen(port, () => {
    console.log(`Example app listening at http://${host}:${port}`)
})