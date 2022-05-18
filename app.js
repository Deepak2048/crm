const express = require("express");
var bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv').config()

const db = require('./database/database')

const accountRoute = require('./account/accountRoute/accountRoutr');
const userRoute = require('./user/userRoute/userRoute');
const authRouter = require('./auth/route/authRout');

const app = express();
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerJSDocs = YAML.load("./api.yaml");


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJSDocs));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: "5mb" }))

app.use(cors())

app.use('/account', accountRoute);
app.use('/user', userRoute)
app.use('/register', authRouter);


const port = process.env.PORT;
app.listen(port, (error) =>{
    if(error)
    throw error;
    console.log(`Server is running at ${port}`);
});

// module.exports = {swaggerJSDocs}