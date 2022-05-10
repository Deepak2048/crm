const express = require("express");
var bodyParser = require('body-parser')
require('dotenv').config()

const db = require('./database/database')

const accountRoute = require('./router/accountRoutr');
const userRoute = require('./router/userRoute');

const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {

    swaggerDefinition:{
        openapi: '3.0.0',
        info:{
            title:"Welcome to Account and User  API",
            version: '1.0.0'
        },
        servers: [{
            url : 'https://localhost/5555/'
        }]

    },
    apis:['./router/*.js']
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: "5mb" }))

app.use('/account', accountRoute);
app.use('/user', userRoute)


const port = process.env.PORT;
app.listen(port, (error) =>{
    if(error)
    throw error;
    console.log(`Server is running at ${port}`);
});

module.exports = {swaggerSpec}