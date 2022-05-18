const db = require('../../database/database');
const read = require('body-parser/lib/read');


const createAccount = (req, res) =>{
    const testInput = {
        accountName : req.body.accountName,
        craetedOn : new Date(),
        createdBy : req.body.createdBy,
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
    const listAllQuery = "select * from test where accountId = ?";
    console.log(parseInt(req.params.accountId));
    db.query(listAllQuery,[parseInt(req.params.accountId)], (error, accountDBResponse) =>{
        if (error)throw error;
        res.send({
            message: "Accounts  are listed successfully by Id",
            ststusCode:200,
            success: true,
            payload:accountDBResponse[0]
        })
    })
};
const updateAccount = (req, res)=>{
    const set = req.body;
    const date = new Date();
    const updateQuery = "update test set accountName =?, createdBy =?,updatedOn =?,updatedBy =?, status =? where accountId = ?";
    db.query(updateQuery,[set.accountName, set.createdBy, date,set.updatedBy,set.status, req.params.accountId], (error, userDeleteDbResponse) =>{
        if (error)throw error;
        res.send({
            message: "Account  are updated successfully ",
            ststusCode:200,
            success: true,
            payload:userDeleteDbResponse[0]
        })
    })

};

const deleteAccountById = (req, res)=>{

    const deleteUserQuery = "delete from test where accountId = ?";
    db.query(deleteUserQuery,[parseInt(req.params.accountId)], (error, deleteUserDBResponse) =>{
        if (error)throw error;
        res.send({
            message: "Account data are deleted successfully by accountId",
            ststusCode:200,
            success: true,
            payload:deleteUserDBResponse[0]
        })
    })
};


module.exports = {createAccount, getAllAccounts, getByAccountId,updateAccount, deleteAccountById}