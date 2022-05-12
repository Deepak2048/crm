const db = require('../database/database');
const read = require('body-parser/lib/read');


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

const getAllAccounts = (req, res)=>{
    const listAllQuery = "select * from test";
    db.query(listAllQuery, (error, accountAllDBResponse) =>{
        if (error)throw error;
        res.send({
            message: "All the accounts details  are listed successfully",
            ststusCode:200,
            success: true,
            payload:accountAllDBResponse
        })
    })
}

const getByAccountId = (req, res)=>{
    const listAllQuery = "select * from user where accountId = ?";
    console.log(parseInt(req.params.accountId));
    db.query(listAllQuery,[parseInt(req.params.accountId)], (error, accountDBResponse) =>{
        if (error)throw error;
        res.send({
            message: "User  are listed successfully by Id",
            ststusCode:200,
            success: true,
            payload:accountDBResponse[0]
        })
    })
}


module.exports = {createAccount, getAllAccounts, getByAccountId}