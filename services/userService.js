const db = require('../database/database');

const createUSer = (req, res) =>{
    
    const userInput = {
        id : req.body.id,
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        createdOn : new Date(),
        createdBy : req.body.createdBy,
        updatedOn : new Date(),
        updatedBy : req.body.updatedBy,
        status : req.body.status,
        accountId : req.body.accountId
    };
    
console.log(userInput);
console.log(req.body);
    const userInsertQuery = " insert into user set ?";
    db.query(userInsertQuery, userInput, (error, userDbREsponse) =>{
        // if(error) throw error;
        res.send("User data inserted successfully")
    })
}

module.exports = {createUSer};