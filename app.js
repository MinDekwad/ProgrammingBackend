const express = require('express');
const app = express()
const port = 3001
const cors = require('cors')
const auth = require('./middleware/auth');
const routeUser = require('./route/user');
const routeProgramming = require('./route/programming');
const bodyParser = require('body-parser');
const logger = require('morgan');

app.use(express.json());
app.use(cors());
app.use('/api/v1/programming/', routeUser);
app.use('/api/v1/programming/',auth,routeProgramming);
app.use(bodyParser.json());
app.use(logger('dev'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})