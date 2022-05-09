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
    const acountInput = {
        accountId : req.body.accountId, 
        accountName : req.body.accountName,
        craetedOn : new Date(),
        createdBy : req.body.createdBy,
        updatedOn : new Date(),
        updatedBy : req.body.updatedBy,
        status : req.body.status

    };
 console.log(acountInput);
 console.log(req.body);
    const accountInsertQuery = `insert into test set ?`;
    db.query(accountInsertQuery, acountInput, (error, accountDbResponse) =>{
        if(error)throw error;
        res.send("Data inserted successfully to account",)
    })
}

// const createAccount = (req, res) =>{
//     const acountInput = {
//         accountId : req.body.accountId, 
//         accountName : req.body.accountName,
//         craetedOn : new Date(),
//         createdBy : req.body.createdBy,
//         updatedOn : new Date(),
//         updatedBy : req.body.updatedBy,
//         status : req.body.status

//     };
//  console.log(acountInput);
//  console.log(req.body);
//     const accountInsertQuery = "insert into account set ?";
//     db.query(accountInsertQuery, acountInput, (error, accountDbResponse) =>{
//         if(error)throw error;
//         res.send("Data inserted successfully to account")
//     })
// }

module.exports = {createAccount}