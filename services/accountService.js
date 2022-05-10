const db = require('../database/database');
const { v4: uuidv4 } = require('uuid');
const read = require('body-parser/lib/read');

/**
 * @openapi
 * /account
 *  post:
 *      description:Response if app is running
 *          responce:
 *              '201':
 *                  description: Inserted successfully
 */

const createAccount = (req, res) =>{
    const testInput = {
        accountName : req.body.accountName,
        craetedOn : new Date(),
        createdBy : req.body.createdBy,
        updatedOn : new Date(),
        updatedBy : req.body.updatedBy,
        status :req.body.status
    };
    const insertquery = "insert into test set ?";

    db.query(insertquery,testInput, (error , dbresponse) =>{
        if(error){
            res.send(error);
        }
        res.send("Data inserted successfully");
    });
}


module.exports = {createAccount}