const express = require('express');
const app = express()
const port = 3001
const models = require("./models/index");
const cors = require('cors')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
const auth = require('./middleware/auth');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.js')[env];
const routeUser = require('./route/user');
const routeProgramming = require('./route/programming');

app.use(express.json());
app.use(cors());
app.use('/api/v1/programming/', routeUser);
app.use('/api/v1/programming/',auth,routeProgramming);

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
//     res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
//     res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
//     next()
//   })

// app.post(`/api/v1/programming/login`, async(req,res) => {})

// app.use(auth).get('/api/v1/programming/read/', async(req,res) =>{})

// app.use(auth).get('/api/v1/programming/readid/:id', async(req,res) => {})

// app.use(auth).post('/api/v1/programming/create/', async(req,res) =>{})

// app.use(auth).put('/api/v1/programming/update/:id', async(req,res) => {})

// app.use(auth).delete('/api/v1/programming/delete/:id', async(req,res) =>{})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})